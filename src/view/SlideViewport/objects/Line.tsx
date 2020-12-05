import React from 'react';
import useDragResize from './useDragResize';
import styles from './Object.module.css';
import { FigureObject } from '../../../model/model';

interface LineProps {
    node: FigureObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function Line(props: LineProps) {
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
    });

    const sizeRef = refs.sizeRef;
    let width = (parseInt(sizeRef.current.width) + props.node.strokeWidth * 2) / props.kWidth;
    let height = (parseInt(sizeRef.current.height) + props.node.strokeWidth * 2) / props.kHeight;

    return (
        <div ref={el} className={styles.paddedObjectBlock} style={props.style}>
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
                    stroke="#878787"
                    r={5}
                    fill="#878787"
                ></circle>
            </svg>
            <svg
                style={{overflow: 'visible'}}
                key={props.node.id}
                width={width}
                height={height}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                    props.onclick(e);
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