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
import { addImage , addSlide } from '../../../actions/actionsCreators';
import { getImageBase64FromDialog } from '../../../methods/getImageBase64';
import slide from '../img/slide.svg';
import { connect } from 'react-redux';
import { AppType } from '../../../model/model';

async function putImage(method: (s: string, k: number) => void) {
    const base64 = await getImageBase64FromDialog();
    const img = document.createElement('img');
    img.src = base64;
    img.style.visibility = 'hidden';
    document.body.append(img);
    img.onload = () => {
        const metrics = img.getBoundingClientRect();
        const k = metrics.width / metrics.height;
        method(base64, k);
        img.remove();
    }
}

interface InstrumentsFiguresRedoUndoProps {
    onClick: () => void;
    addImage: (s: string, k: number) => void;
    addSlide: () => void;
}

function InstrumentsFiguresRedoUndo(props: InstrumentsFiguresRedoUndoProps) {
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
            <ImgButton onClick={() => {
                putImage(props.addImage)
            }} imgUrl={ImageIcon} />
            <ImgButton onClick={addTextToSlide} imgUrl={TextIcon} />
            {/* <ImgButton onClick={addLineToSlide} imgUrl={LineIcon} /> */}
            <ImgButton onClick={() => {
                props.addSlide();
            }} imgUrl={slide} />
        </div>
    );
}

interface InstrumentsFiguresRedoUndoOwnProps {
    onClick: () => void;
}

const mapStateToProps = (state: AppType, ownProps: InstrumentsFiguresRedoUndoOwnProps): InstrumentsFiguresRedoUndoOwnProps => {
    return ownProps
}

const mapDispatchToProps = {
    addImage,
    addSlide
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsFiguresRedoUndo)
