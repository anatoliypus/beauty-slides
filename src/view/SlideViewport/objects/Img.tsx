import React from 'react';

interface ImgProps {
    id: string;
    style: React.CSSProperties;
    path: string;
}

export default function Img(props: ImgProps) {
    return (
        <img style={props.style} key={props.id} src={props.path}></img>
    );
}
