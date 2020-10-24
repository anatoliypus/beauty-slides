import React from 'react';
import './Topbar.css';

interface TopbarProps {
    presentationName: string;
}

function randomInteger(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export default function Topbar(props: TopbarProps) {
    const randNum = randomInteger(1, 5);
    const bgClassName = 'topbar_background_' + randNum;

    return (
        <div className={'topbar' + ' ' + bgClassName}>
            <h1>{props.presentationName}</h1>
            <button className="export-btn">Экспорт</button>
        </div>
    );
}
