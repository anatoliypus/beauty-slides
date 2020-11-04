import React, { useEffect, useRef } from 'react';
import styles from './Topbar.module.css';
import { dispatch } from '../../dispatcher';
import { changePresentationName } from '../../methods/methods';

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
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (input.current) {
            input.current.value = props.presentationName;
            input.current.addEventListener('change', () => {
                if (input.current) {
                    if (input.current.value === '') dispatch(changePresentationName, 'Название презентации');
                    else dispatch(changePresentationName, input.current.value);
                }
            })
        }
    });

    return (
        <div className={`${styles.topbar} ${styles[bgClassName]}`}>
            <input
                ref={input}
                className={styles.topbar__input}
            />
            <button className={styles.exportBtn}>Экспорт</button>
        </div>
    );
}
