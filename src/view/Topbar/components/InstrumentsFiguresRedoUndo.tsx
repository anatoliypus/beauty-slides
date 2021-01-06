import React from 'react';
import RectIcon from '../img/rectangle.svg';
import TriangIcon from '../img/triangle.svg';
import CircleIcon from '../img/circle.svg';
import TextIcon from '../img/text.svg';
import ImageIcon from '../img/image.svg';
import ImgButton from './ImgButton';
import {
    addRectangleToSlide,
    addTriangleToSlide,
    addCircleToSlide,
    addTextToSlide,
} from './contextsButtonDeclaration';
import { addImage, getImageBase64FromDialog, addSlide } from '../../../methods/methods';
import { dispatch } from '../../../dispatcher';
import slide from '../img/slide.svg';

async function putImage() {
    const base64 = await getImageBase64FromDialog();
    dispatch(addImage, base64);
}

interface InstrumentsFiguresRedoUndoProps {
    onClick: () => void;
}

export default function InstrumentsFiguresRedoUndo(props: InstrumentsFiguresRedoUndoProps) {
    const inlineStyle = {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        marginLeft: '40px'
    }
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (ref.current) ref.current.addEventListener('click', props.onClick);
        return () => {
            if (ref.current) ref.current.removeEventListener('click', props.onClick);
        }
    })
    return (
        <div ref={ref} style={inlineStyle}>
            <ImgButton onClick={addRectangleToSlide} imgUrl={RectIcon} />
            <ImgButton onClick={addTriangleToSlide} imgUrl={TriangIcon} />
            <ImgButton onClick={addCircleToSlide} imgUrl={CircleIcon} />
            <ImgButton onClick={putImage} imgUrl={ImageIcon} />
            <ImgButton onClick={addTextToSlide} imgUrl={TextIcon} />
            {/* <ImgButton onClick={addLineToSlide} imgUrl={LineIcon} /> */}
            <ImgButton onClick={() => {
                dispatch(addSlide)
            }} imgUrl={slide} />
        </div>
    );
}
