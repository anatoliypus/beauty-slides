import React from 'react';

interface ImgProps {
    id: string;
    style: React.CSSProperties;
    path: string;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Img(props: ImgProps) {
    return (
        <img style={props.style} key={props.id} src={props.path} onClick={(e: React.MouseEvent<HTMLElement>) => {
            props.onclick(e);
        }}></img>
    );
}
