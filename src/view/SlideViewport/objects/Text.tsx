import React from 'react';
import useDragging from './useDragging';

interface TextProps {
    id: string;
    style: React.CSSProperties;
    data: string;
    x: number;
    y: number;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Text(props: TextProps) {

    const el = React.useRef<HTMLParagraphElement>(null);
    useDragging(el, props.x, props.y, props.kWidth, props.kHeight, props.id, props.choosed);

    return (
        <p ref={el} key={props.id} className="text-node" style={props.style} onClick={(e: React.MouseEvent<HTMLElement>) => {
            props.onclick(e);
        }}>
            {props.data}
        </p>
    );
}
