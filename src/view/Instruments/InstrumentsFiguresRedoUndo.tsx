import React from 'react';
import RectIcon from './img/rectangle.svg';
import TriangIcon from './img/triangle.svg';
import CircleIcon from './img/circle.svg';
import TextIcon from './img/text.svg';
import UndoIcon from './img/undo.svg';
import RedoIcon from './img/redo.svg';
import ImageIcon from './img/image.svg';
import LineIcon from './img/line.svg';
import { undo, redo } from '../../dispatcher';
import ImgButton from './components/ImgButton';
import {
    addRectangleToSlide,
    addTriangleToSlide,
    addCircleToSlide,
    addTextToSlide,
    addLineToSlide,
} from './contextsButtonDeclaration';
import { addImage, getImageBase64FromDialog } from '../../methods/methods';
import { dispatch } from '../../dispatcher';

async function putImage() {
    const base64 = await getImageBase64FromDialog();
    dispatch(addImage, base64);
}

export default function InstrumentsFiguresRedoUndo() {
    const inlineStyle = {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        marginLeft: '40px'
    }
    return (
        <div style={inlineStyle}>
            <ImgButton onClick={addRectangleToSlide} imgUrl={RectIcon} />
            <ImgButton onClick={addTriangleToSlide} imgUrl={TriangIcon} />
            <ImgButton onClick={addCircleToSlide} imgUrl={CircleIcon} />
            <ImgButton onClick={putImage} imgUrl={ImageIcon} />
            <ImgButton onClick={addTextToSlide} imgUrl={TextIcon} />
            <ImgButton onClick={addLineToSlide} imgUrl={LineIcon} />
            <ImgButton onClick={undo} imgUrl={UndoIcon} />
            <ImgButton onClick={redo} imgUrl={RedoIcon} />
        </div>
    );
}
