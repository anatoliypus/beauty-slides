import React from 'react';

interface TextProps {
    id: string;
    style: React.CSSProperties;
    data: string;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Text(props: TextProps) {
    return (
        <p key={props.id} className="text-node" style={props.style} onClick={(e: React.MouseEvent<HTMLElement>) => {
            props.onclick(e);
        }}>
            {props.data}
        </p>
    );
}
