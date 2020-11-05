import React, { useEffect, useRef, useState } from 'react';
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
    const button = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onChangeFunc = () => {
            if (input.current) dispatch(changePresentationName, input.current.value);
        }
        if (input.current) {
            input.current.value = props.presentationName;
            input.current.addEventListener('change', onChangeFunc, {once: true});
        }
        return () => {
            if (input.current) input.current.removeEventListener('change', onChangeFunc)
        }
    });

    return (
        <div className={`${styles.topbar} ${styles[bgClassName]}`}>
            <input ref={input} className={styles.topbar__input} />
            <button className={styles.exportBtn}>Экспорт</button>
        </div>
    );
}
