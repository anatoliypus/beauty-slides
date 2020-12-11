import React from 'react';
import useDragResize from './useDragResize';
import styles from './Object.module.css';
import { FigureObject } from '../../../model/model';

interface RectProps {
    node: FigureObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function Rectangle(props: RectProps) {
    const el = React.useRef<HTMLDivElement>(null);
    const resizeIconTopRightRef = React.useRef<SVGSVGElement>(null);

    const refs = useDragResize({
        obj: el,
        resizeIcon: resizeIconTopRightRef,
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
    const width = (parseInt(sizeRef.current.width) + props.node.strokeWidth * 2) / props.kWidth;
    const height = (parseInt(sizeRef.current.height) + props.node.strokeWidth * 2) / props.kHeight;

    return (
        <div ref={el} className={styles.paddedObjectBlock} style={props.style}>
            <svg
                ref={resizeIconTopRightRef}
                className={styles.resizeIcon}
                width={11}
                height={11}
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
                <rect
                    rx={props.node.borderRadius ? props.node.borderRadius / props.kWidth : 0}
                    strokeWidth={props.node.strokeWidth / props.kWidth}
                    width={parseInt(sizeRef.current.width) / props.kWidth}
                    height={parseInt(sizeRef.current.height) / props.kHeight}
                    x={props.node.strokeWidth / 2}
                    stroke={props.node.strokeColor}
                    y={props.node.strokeWidth / 2}
                    fill={props.node.background ? props.node.background : "transparent"}
                ></rect>
            </svg>
        </div>
    );
}
