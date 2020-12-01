import React from 'react';
import useScaleResize from './useScaleResize';
import styles from './Object.module.css';

interface CircleProps {
    strokeWidth: number;
    id: string;
    style: React.CSSProperties;
    width: string;
    height: string;
    kWidth: number;
    kHeight: number;
    bgColor: string | null;
    strokeColor: string;
    x: number;
    y: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function Circle(props: CircleProps) {
    const el = React.useRef<HTMLDivElement>(null);
    const resizeIconRef = React.useRef<SVGSVGElement>(null);

    const refs = useScaleResize({
        obj: el,
        resizeIcon: resizeIconRef,
        x: props.x,
        y: props.y,
        kWidth: props.kWidth,
        kHeight: props.kHeight,
        id: props.id,
        choosed: props.choosed,
        width: props.width,
        height: props.height,
        squareResize: true,
    });

    const sizeRef = refs.sizeRef;
    const width = (parseInt(sizeRef.current.width) + props.strokeWidth * 2) / props.kWidth;
    const height = (parseInt(sizeRef.current.height) + props.strokeWidth * 2) / props.kHeight;

    return (
        <div ref={el} className={styles.paddedObjectBlock} style={props.style}>
            <svg ref={resizeIconRef} className={styles.resizeIcon} width={11} height={11} style={props.choosed ? {display: 'block'} : {display: 'none'}}>
                <circle
                    cx={5.5}
                    cy={5.5}
                    stroke="#878787"
                    r={5}
                    fill='#878787'
                ></circle>
            </svg>
            <svg
                key={props.id}
                width={width}
                height={height}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                    props.onclick(e);
                }}
            >
                <circle
                    strokeWidth={props.strokeWidth / props.kWidth}
                    cx={(parseInt(sizeRef.current.width) + props.strokeWidth) / (2 * props.kHeight)}
                    cy={(parseInt(sizeRef.current.height) + props.strokeWidth) / (2 * props.kHeight)}
                    stroke={props.strokeColor}
                    r={parseInt(sizeRef.current.width) / (2 * props.kHeight)}
                    fill={props.bgColor ? props.bgColor : "transparent"}
                ></circle>
            </svg>
        </div>
    );
}
