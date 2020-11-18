import React from 'react';
import styles from './Topbar.module.css';
import { dispatch, exportPDFApp } from '../../dispatcher';
import { changePresentationName } from '../../methods/methods';

interface TopbarProps {
    presentationName: string;
}

export default function Topbar(props: TopbarProps) {
    const input = React.useRef<HTMLInputElement>(null);
    const button = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
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
        <div className={`${styles.topbar}`}>
            <input ref={input} className={styles.topbar__input} />
            <button className={styles.exportBtn} onClick={exportPDFApp}>Экспорт PDF</button>
        </div>
    );
}
