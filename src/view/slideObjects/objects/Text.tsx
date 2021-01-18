import React from 'react';
import useDragResize from './useDragResize';
import textStyles from './Text.module.css';
import objStyles from './Object.module.css';
import useChangeText from './useChangeText';
import { AppType, NodeType, TextObject } from '../../../model/model';
import { connect } from 'react-redux';
import { changeTextData, resizeNode, changeSelectedObject, moveItem } from '../../../actions/actionsCreators';

interface TextProps {
    node: TextObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    changeTextData: (data: string) => void;
    resizeNode: (width: number, height: number) => void;
    changeSelectedObject: (id: string, type: NodeType) => void;
    moveItem: (x: number, y: number) => void;
}

function Text(props: TextProps) {
    const div = React.useRef<HTMLDivElement>(null);
    const resizeIconRef = React.useRef<SVGSVGElement>(null);

    const refs = useDragResize({
        obj: div,
        resizeIcon: resizeIconRef,
        x: props.node.positionTopLeft.x,
        y: props.node.positionTopLeft.y,
        kWidth: props.kWidth,
        kHeight: props.kHeight,
        id: props.node.id,
        choosed: props.choosed,
        width: props.node.width,
        height: props.node.height,
        squareResize: false,
        type: 'text',
        resizeNode: props.resizeNode,
        changeSelectedObject: props.changeSelectedObject,
        moveItem: props.moveItem
    });

    let style = props.style;
    if (props.kWidth !== 1) {
        style = {
            ...style,
            border: 0
        }
    }

    const size = refs.sizeRef;

    const el = React.useRef<HTMLTextAreaElement>(null);
    useChangeText({id: props.node.id, data: props.node.data, el: el, changeTextData: props.changeTextData});

    React.useEffect(() => {
        if (el.current) {
            el.current.disabled = props.kWidth === 1 && props.kHeight === 1 ? false : true;
        }
    })

    const width = size.current.width / props.kWidth + 'px';
    const height = size.current.width / props.kHeight + 'px';

    return (
        <div ref={div} className={objStyles.objectBlock} style={{width: width, height: height, zIndex: props.style.zIndex}}>
            <svg
                ref={resizeIconRef}
                className={objStyles.resizeIcon}
                width={11}
                height={11}
                style={
                    props.choosed ? { display: 'block' } : { display: 'none' }
                }
            >
                <circle
                    cx={5.5}
                    cy={5.5}
                    stroke="#000"
                    r={5}
                    fill="#000"
                ></circle>
            </svg>
            <textarea ref={el} className={textStyles.input} key={props.node.id} style={style} onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                props.changeSelectedObject(props.node.id, props.node.type);
        }} />
        </div>
    );
}

interface TextOwnProps {
    node: TextObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
}

const mapDispatchToProps = {
    changeTextData,
    resizeNode,
    changeSelectedObject,
    moveItem
}

const mapStateToProps = (state: AppType, ownProps: TextOwnProps) => {
    return ownProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(Text)
