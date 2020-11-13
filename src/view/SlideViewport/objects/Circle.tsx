import React from 'react';
import { dispatch } from '../../../dispatcher';
import { moveItem } from '../../../methods/methods';
import useDragging from './useDragging';

interface CircleProps {
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

export default function Circle(props: CircleProps) {

    const el = React.useRef<SVGSVGElement>(null);
    useDragging(el, props.x, props.y, props.kWidth, props.kHeight, props.id, props.choosed);

    return (
        <svg
            ref={el}
            style={props.style}
            key={props.id}
            width={(parseInt(props.width) + 5) / props.kHeight}
            height={(parseInt(props.height) + 5) / props.kHeight}
            onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                props.onclick(e);
            }}
        >
            <circle
                cx={(parseInt(props.width) + 2.5) / (2 * props.kHeight)}
                cy={(parseInt(props.height) + 2.5) / (2 * props.kHeight)}
                stroke="black"
                r={parseInt(props.width) / (2 * props.kHeight)}
                fill="transparent"
            ></circle>
        </svg>
    );
}
