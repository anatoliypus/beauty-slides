import React from 'react';

interface TextProps {
    id: string;
    style: React.CSSProperties;
    data: string;
}

export default function Text(props: TextProps) {
    return (
        <p key={props.id} className="text-node" style={props.style}>
            {props.data}
        </p>
    );
}
