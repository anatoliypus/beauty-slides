import React from 'react';

interface RectProps {
    id: string;
    style: React.CSSProperties;
    width: string;
    height: string;
    kWidth: number;
    kHeight: number;
    onclick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function Rectangle(props: RectProps) {
    return (
        <svg
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
