import React from 'react';
import useScaleResize from './useScaleResize';
import styles from './Object.module.css';

interface ImgProps {
    id: string;
    style: React.CSSProperties;
    path: string;
    kWidth: number;
    kHeight: number;
    width: string;
    height: string;
    x: number;
    y: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Img(props: ImgProps) {
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
                key={props.id}
                src={props.path}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    props.onclick(e);
                }}
            ></img>
        </div>
    );
}
