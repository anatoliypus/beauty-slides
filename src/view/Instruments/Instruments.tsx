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
import ImageIcon from './img/image.svg';
import LineIcon from './img/line.svg';
import Palette from './components/Palette';
import { undo, redo } from '../../dispatcher';
import {
    addSlideButtonOnClick,
    contextBtns,
    addRectangleToSlide,
    addTriangleToSlide,
    addCircleToSlide,
    addTextToSlide,
    addLineToSlide,
} from './contextsButtonDeclaration';
import { AppType } from '../../model/model';
import TextMenu from './components/TextMenu';
import FigureMenu from './components/FigureMenu';
import DeleteObject from './components/DeleteObject';
import { addImage, getImageBase64FromDialog } from '../../methods/methods';
import { dispatch } from '../../dispatcher';

interface InstrumentsProps {
    app: AppType;
}

async function putImage() {
    const base64 = await getImageBase64FromDialog();
    dispatch(addImage, base64);
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
    else menu = null;

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
                <ImgButton onClick={addRectangleToSlide} imgUrl={RectIcon} />
                <ImgButton onClick={addTriangleToSlide} imgUrl={TriangIcon} />
                <ImgButton onClick={addCircleToSlide} imgUrl={CircleIcon} />
                <ImgButton onClick={addTextToSlide} imgUrl={TextIcon} />
                <ImgButton onClick={addLineToSlide} imgUrl={LineIcon} />
                <ImgButton onClick={undo} imgUrl={UndoIcon} />
                <ImgButton onClick={redo} imgUrl={RedoIcon} />
                <ImgButton onClick={putImage} imgUrl={ImageIcon} />
                {menu}
                {props.app.choosedObjectId !== '' && <DeleteObject app={props.app} />}
            </div>
            <Palette
                visibility={isPaletteVisible}
                changeVisibility={changePaletteVisibility}
                type={'slide'}
            />
        </>
    );
}
