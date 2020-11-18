import React from 'react';
import styles from './Instruments.module.css';
import ContextButton from './components/ContextButton';
import ImgButton from './components/ImgButton';
import TextButton from './components/TextButton';
import RectIcon from './img/rectangle.svg';
import TriangIcon from './img/triangle.svg';
import CircleIcon from './img/circle.svg';
import TextIcon from './img/text.svg';
import PlusIcon from './img/plus.svg';
import UndoIcon from './img/undo.svg';
import RedoIcon from './img/redo.svg';
import Palette from './components/Palette';
import { undo, redo } from '../../dispatcher';
import {
    addSlideButtonOnClick,
    contextBtns,
    addRectangleToSlide,
    addTriangleToSlide,
    addCircleToSlide,
    addTextToSlide,
} from './contextsButtonDeclaration';

export default function Instruments() {
    const defaultState: any = {};
    contextBtns.forEach((item) => {
        defaultState[item.heading] = false;
    });
    const [contextMenuState, changeContextMenuState] = React.useState(
        defaultState
    );
    const [isPaletteVisible, changePaletteVisibility] = React.useState(false);
    React.useEffect(() => {
        
    });
    return (
        <>

            <div className={styles.instruments}>
                <ImgButton onClick={addSlideButtonOnClick} imgUrl={PlusIcon} />
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
                                    if (key !== item.heading) newState[key] = false;
                                newState[item.heading] = !newState[item.heading];
                                changeContextMenuState(newState);
                            }}
                        />
                    );
                })}
                <TextButton heading='Залить слайд цветом' onClick={() => {
                    changePaletteVisibility(true);
                }}/>
                <ImgButton onClick={addRectangleToSlide} imgUrl={RectIcon} />
                <ImgButton onClick={addTriangleToSlide} imgUrl={TriangIcon} />
                <ImgButton onClick={addCircleToSlide} imgUrl={CircleIcon} />
                <ImgButton onClick={addTextToSlide} imgUrl={TextIcon} />
                <ImgButton onClick={undo} imgUrl={UndoIcon} />
                <ImgButton onClick={redo} imgUrl={RedoIcon} />
            </div>
            <Palette visibility={isPaletteVisible} changeVisibility={changePaletteVisibility}/>
        </>
    );
}
