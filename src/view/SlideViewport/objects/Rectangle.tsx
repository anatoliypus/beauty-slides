import React from 'react';
import useDragging from './useDragging';

interface RectProps {
    id: string;
    style: React.CSSProperties;
    width: string;
    height: string;
    kWidth: number;
    kHeight: number;
    x: number;
    y: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function Rectangle(props: RectProps) {
    const el = React.useRef<SVGSVGElement>(null);
    useDragging(el, props.x, props.y, props.kWidth, props.kHeight, props.id, props.choosed);

    return (
        <svg
            ref={el}
            style={props.style}
            key={props.id}
            width={(parseInt(props.width) + 5) / props.kWidth}
            height={(parseInt(props.height) + 5) / props.kHeight}
            onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                props.onclick(e);
            }}
        >
            <rect
                x="1"
                y="1"
                width={parseInt(props.width) / props.kWidth}
                height={parseInt(props.height) / props.kHeight}
                stroke="black"
                fill="transparent"
            ></rect>
        </svg>
    );
}
