import React from 'react';
import styles from './Topbar.module.css';

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
        <div className={`${styles.topbar} ${styles[bgClassName]}`}>
            <input className={styles.topbar__input} placeholder={props.presentationName} />
            <button className={styles.exportBtn}>Экспорт</button>
        </div>
    );
}