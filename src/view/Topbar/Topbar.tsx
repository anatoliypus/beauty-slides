import React from 'react';
import { AppType, choosedObjectType } from '../../model/model';
import styles from './Topbar.module.css';
import { changePresentationName, exportPDF } from '../../actions/actionsCreators';
import exportIcon from './img/exportIcon.svg';
import ContextButton from './components/ContextButton';
import TextButton from './components/TextButton';
import { contextBtns } from './components/contextsButtonDeclaration';
import Palette from './components/Palette';
import plus from './img/instrumentsPlus.svg';
import minus from './img/instrumentsMinus.svg';
import InstrumentsFiguresRedoUndo from './components/InstrumentsFiguresRedoUndo';
import FigureMenu from './components/FigureMenu';
import TextMenu from './components/TextMenu';
import ImageMenu from './components/ImageMenu';
import DeleteObject from './components/DeleteObject';
import { connect } from 'react-redux';

interface TopbarProps {
    name: string;
    choosedObject: choosedObjectType;
    changePresentationName: (s: string) => void;
    exportPDF: () => void;
}

function Topbar(props: TopbarProps) {
    const input = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const processName = (name: string): string => {
            if (name.length > 15) {
                let splittedName = name.split('');
                splittedName.splice(14);
                name = splittedName.join('') + '...';
            }
            return name;
        };

        const onChangeFunc = () => {
            if (input.current) {
                if (input.current.value !== '')
                    props.changePresentationName(input.current.value);
                else props.changePresentationName('presentation.');
            }
        };

        const returnProcessedName = (e: Event) => {
            if (input.current && e.target !== input.current) {
                input.current.value = processName(input.current.value);
            }
        };

        const onFocusFunc = () => {
            if (input.current) input.current.value = props.name;
            window.addEventListener('click', returnProcessedName);
        };

        if (input.current) {
            let name = props.name;
            name = processName(name);
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            if (! ctx) throw new Error();
            ctx.font = getComputedStyle(input.current).font;
            const width = ctx.measureText(name).width;
            input.current.style.width = width + 'px';
            input.current.value = name;
            input.current.addEventListener('change', onChangeFunc, {
                once: true,
            });
            input.current.addEventListener('focus', onFocusFunc, {
                once: true,
            });
        }

        return () => {
            if (input.current) {
                input.current.removeEventListener('focus', onFocusFunc);
                input.current.removeEventListener('change', onChangeFunc);
                window.removeEventListener('click', returnProcessedName);
            }
        }
    });

    const defaultState: any = {};
    contextBtns.forEach((item) => {
        defaultState[item.heading] = false;
    });
    const [contextMenuState, changeContextMenuState] = React.useState(
        defaultState
    );
    const [isPaletteVisible, changePaletteVisibility] = React.useState(false);
    const [areInstrumensVisible, changeInstrumentsVisibility] = React.useState(
        false
    );
    const [instrumentsX, __changeInstrumentsX] = React.useState(0);
    const instrXRef = React.useRef(instrumentsX);
    const changeInstrumentsX = (data: number) => {
        instrXRef.current = data;
        __changeInstrumentsX(data);
    };

    const [instrumentsY, __changeInstrumentsY] = React.useState(0);
    const instrYRef = React.useRef(instrumentsX);
    const changeInstrumentsY = (data: number) => {
        instrYRef.current = data;
        __changeInstrumentsY(data);
    };

    const instrumentsButtonRef = React.useRef<HTMLButtonElement>(null);
    const instrumentsRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (instrumentsButtonRef.current && instrumentsRef.current) {
            __changeInstrumentsX(
                instrumentsButtonRef.current.getBoundingClientRect().x -
                    instrumentsRef.current.getBoundingClientRect().width +
                    instrumentsButtonRef.current.getBoundingClientRect().width
            );
            __changeInstrumentsY(
                instrumentsButtonRef.current.getBoundingClientRect().y
            );
        }
    });

    React.useEffect(() => {
        const listenForOutsideClk = (e: MouseEvent) => {
            if (! e.defaultPrevented) {
                let newState: any = {};
                for (let key in contextMenuState) {
                    newState[key] = false;
                }
                changeContextMenuState(newState)
            }
        };
        for (let key in contextMenuState) {
            if (contextMenuState[key]) {
                window.addEventListener('click', listenForOutsideClk, {
                    once: true,
                });
            }
        }
        return () => {
            window.removeEventListener('click', listenForOutsideClk);
        };
    }, [contextMenuState]);

    let menu;
    if (props.choosedObject.type === 'figure')
        menu = <FigureMenu />;
    else if (props.choosedObject.type === 'text')
        menu = <TextMenu />;
    else if (props.choosedObject.type === 'img') menu = <ImageMenu />;
    else menu = null;

    return (
        <>
            <div className={`${styles.topbar}`}>
                <div style={{ display: 'flex' }}>
                    <input ref={input} className={styles.topbar__input} />
                    {!menu &&
                        contextBtns.map((item, index) => {
                            return (
                                <ContextButton
                                    key={index}
                                    menuShown={contextMenuState[item.heading]}
                                    heading={item.heading}
                                    contextMenuItems={item.menu}
                                    onclick={() => {
                                        const newState = {
                                            ...contextMenuState,
                                        };
                                        for (let key in newState)
                                            if (key !== item.heading)
                                                newState[key] = false;
                                        newState[item.heading] = !newState[
                                            item.heading
                                        ];
                                        changeContextMenuState(newState);
                                    }}
                                />
                            );
                        })}
                    {!menu && (
                        <TextButton
                            heading="Залить слайд цветом"
                            onClick={() => {
                                changePaletteVisibility(true);
                            }}
                        />
                    )}

                    <div style={{ display: 'flex' }}>
                        {menu}
                        {props.choosedObject.id && (
                            <DeleteObject />
                        )}
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div
                        ref={instrumentsRef}
                        className={
                            areInstrumensVisible
                                ? `${styles.instruments}`
                                : `${styles.instruments} ${styles.instruments__closed}`
                        }
                        style={{
                            left: instrumentsX,
                            top: instrumentsY,
                        }}
                    >
                        <InstrumentsFiguresRedoUndo
                            onClick={() => {
                                changeInstrumentsVisibility(false);
                            }}
                        />
                    </div>
                    <button
                        ref={instrumentsButtonRef}
                        className={styles.openInstrumentsBtn}
                        onClick={() => {
                            changeInstrumentsVisibility(!areInstrumensVisible);
                        }}
                    >
                        <img src={areInstrumensVisible ? minus : plus} alt="" />
                    </button>
                    <button className={styles.exportBtn} onClick={props.exportPDF}>
                        <img src={exportIcon} alt="export" />
                    </button>
                </div>
            </div>
            <Palette
                visibility={isPaletteVisible}
                changeVisibility={changePaletteVisibility}
                type={'slide'}
            />
        </>
    );
}

interface TopbarOwnProps {
    name: string;
    choosedObject: choosedObjectType;
}

const mapStateToProps = (state: AppType): TopbarOwnProps => {
    return {
        name: state.name,
        choosedObject: state.choosedObject
    }
}

const mapDispatchToProps = {
    changePresentationName,
    exportPDF
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);