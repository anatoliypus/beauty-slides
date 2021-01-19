import React from 'react';
import useDragResize from './useDragResize';
import styles from './Object.module.css';
import { AppType, FigureObject, NodeType } from '../../../model/model';
import { connect } from 'react-redux';
import { resizeNode, changeSelectedObject, moveItem } from '../../../actions/actionsCreators';


interface LineProps {
    node: FigureObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    resizeNode: (width: number, height: number) => void;
    changeSelectedObject: (id: string, type: NodeType) => void;
    moveItem: (x: number, y: number) => void;
}

function Line(props: LineProps) {
    const el = React.useRef<HTMLDivElement>(null);
    const resizeIconRef = React.useRef<SVGSVGElement>(null);

    const refs = useDragResize({
        obj: el,
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
        type: 'figure',
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

    const sizeRef = refs.sizeRef;
    let width = (sizeRef.current.width + props.node.strokeWidth * 2) / props.kWidth;
    let height = (sizeRef.current.height + props.node.strokeWidth * 2) / props.kHeight;

    return (
        <div ref={el} className={styles.paddedObjectBlock} style={style}>
            <svg
                ref={resizeIconRef}
                className={styles.resizeIcon}
                width={width}
                height={height}
                style={
                    props.choosed ? { display: 'block' } : { display: 'none' }
                }
            >
                <circle
                    cx={5.5}
                    cy={5.5}
                    stroke={props.style.borderColor}
                    r={5}
                    fill={props.style.borderColor}
                ></circle>
            </svg>
            <svg
                style={{overflow: 'visible'}}
                key={props.node.id}
                width={width}
                height={height}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                    e.preventDefault();
                    props.changeSelectedObject(props.node.id, props.node.type);
                }}
            >
                <line
                    x1 = {0}
                    y1 = {0}
                    x2 = {width}
                    y2 = {height}
                    stroke = {props.node.strokeColor}
                ></line>
            </svg>
        </div>
    );
}

interface LineOwnProps {
    node: FigureObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
}

const mapStateToProps = (state: AppType, ownProps: LineOwnProps) => {
    return ownProps;
}

const mapDispatchToProps = {
    resizeNode,
    changeSelectedObject,
    moveItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Line);
