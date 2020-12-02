import React from 'react';
import useDragResize from './useDragResize';
import styles from './Object.module.css';
import { ImgObject } from '../../../model/model';

interface ImgProps {
    node: ImgObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Img(props: ImgProps) {
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

    const size = refs.sizeRef;

    const width = parseInt(size.current.width) / props.kWidth + 'px';
    const height = parseInt(size.current.width) / props.kHeight + 'px';


    return (
        <div ref={el} className={styles.objectBlock} style={{width: width, height: height}}>
            <svg
                ref={resizeIconRef}
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
            <img
                style={props.style}
                key={props.node.id}
                src={props.node.path}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    props.onclick(e);
                }}
            ></img>
        </div>
    );
}
