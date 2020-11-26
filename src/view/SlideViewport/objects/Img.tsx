import React from 'react';
import useDragging from './useScaleResize';

interface ImgProps {
    id: string;
    style: React.CSSProperties;
    path: string;
    kWidth: number;
    kHeight: number;
    x: number;
    y: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Img(props: ImgProps) {
    const el = React.useRef<HTMLImageElement>(null);
    // useDragging(el, props.x, props.y, props.kWidth, props.kHeight, props.id, props.choosed);

    return (
        <img ref={el} style={props.style} key={props.id} src={props.path} onClick={(e: React.MouseEvent<HTMLElement>) => {
            props.onclick(e);
        }}></img>
    );
}
