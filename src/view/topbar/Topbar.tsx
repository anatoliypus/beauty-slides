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
    const button = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const processName = (name: string): string => {
            if (name.length > 20) {
                let splittedName = name.split('');
                splittedName.splice(19);
                name = splittedName.join('') + '...';
            }
            return name;
        };

        const onChangeFunc = () => {
            if (input.current)
                dispatch(changePresentationName, input.current.value);
        };

        const returnProcessedName = (e: Event) => {
            if (input.current && e.target !== input.current) {
                input.current.value = processName(input.current.value);
            }
        };
        
        const onFocusFunc = () => {
            if (input.current) input.current.value = props.presentationName;
            window.addEventListener('click', returnProcessedName);
        };

        if (input.current) {
            let name = props.presentationName;
            name = processName(name);
            input.current.value = name;
            input.current.addEventListener('change', onChangeFunc, {
                once: true,
            });
            input.current.addEventListener('focus', onFocusFunc, {
                once: true,
            });
        }
        
        return () => {
            if (input.current) {
                input.current.removeEventListener('focus', onFocusFunc);
                input.current.removeEventListener('change', onChangeFunc);
                window.removeEventListener('click', returnProcessedName);
            }
        };
    });

    return (
        <div className={`${styles.topbar} ${styles[bgClassName]}`}>
            <input ref={input} className={styles.topbar__input} />
            <button className={styles.exportBtn}>Экспорт PDF</button>
        </div>
    );
}
