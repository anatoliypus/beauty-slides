import React from 'react';

interface CircleProps {
    id: string;
    style: React.CSSProperties;
    width: string;
    height: string;
    kWidth: number;
    kHeight: number;
}

export default function Circle(props: CircleProps) {
    return (
        <svg
            style={props.style}
            key={props.id}
            width={(parseInt(props.width) + 5) / props.kWidth}
            height={(parseInt(props.height) + 5) / props.kHeight}
        >
            <circle
                cx={(parseInt(props.width) + 2.5) / (2 * props.kWidth)}
                cy={(parseInt(props.height) + 2.5) / (2 * props.kHeight)}
                stroke="black"
                r={parseInt(props.width) / (2 * props.kWidth)}
                fill="transparent"
            ></circle>
        </svg>
    );
}
