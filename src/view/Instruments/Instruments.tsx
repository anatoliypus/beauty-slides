import React from 'react';
import styles from './Instruments.module.css';
import ContextButton from './components/ContextButton';
import ImgButton from './components/ImgButton';
import TextButton from './components/TextButton';
import PlusIcon from './img/plus.svg';
import Palette from './components/Palette';
import {
    addSlideButtonOnClick,
    contextBtns,
} from './contextsButtonDeclaration';
import { AppType } from '../../model/model';
import TextMenu from './components/TextMenu';
import FigureMenu from './components/FigureMenu';
import DeleteObject from './components/DeleteObject';
import InstrumentsFiguresRedoUndo from './InstrumentsFiguresRedoUndo';
import ImageMenu from './components/ImageMenu';

interface InstrumentsProps {
    app: AppType;
}

export default function Instruments(props: InstrumentsProps) {
    const defaultState: any = {};
    contextBtns.forEach((item) => {
        defaultState[item.heading] = false;
    });
    const [contextMenuState, changeContextMenuState] = React.useState(
        defaultState
    );
    const [isPaletteVisible, changePaletteVisibility] = React.useState(false);

    let menu;
    if (props.app.choosedObjectType === 'figure') menu = <FigureMenu app={props.app} />
    else if (props.app.choosedObjectType === 'text') menu = <TextMenu app={props.app} />
    else if (props.app.choosedObjectType === 'img') menu = <ImageMenu />
    else menu = null;

    return (
        <>
            <div className={styles.instruments}>
                <ImgButton onClick={addSlideButtonOnClick} imgUrl={PlusIcon} />
                <span style={{width: '30px'}}></span>
                {contextBtns.map((item, index) => {
                    return (
                        <ContextButton
                            key={index}
                            menuShown={contextMenuState[item.heading]}
                            heading={item.heading}
                            contextMenuItems={item.menu}
                            onclick={() => {
                                const newState = { ...contextMenuState };
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
                <TextButton
                    heading="Залить слайд цветом"
                    onClick={() => {
                        changePaletteVisibility(true);
                    }}
                />
                {! menu && <InstrumentsFiguresRedoUndo />}
                {menu}
                {props.app.choosedObjectId && <DeleteObject app={props.app} />}
            </div>
            <Palette
                visibility={isPaletteVisible}
                changeVisibility={changePaletteVisibility}
                type={'slide'}
            />
        </>
    );
}
