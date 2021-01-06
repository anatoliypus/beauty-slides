import React from 'react';
import styles from './ObjectsMenu.module.css';

interface SelectElementProps {
    selectedValue: string;
    values: Array<number>;
    callback: (value: string) => void;
}

export default function SelectElement(props: SelectElementProps) {
    const changeStrokeWidth = React.useRef<HTMLSelectElement>(null);

    return (
        <select className={`${styles.objectsMenuNode} ${styles.selectElement}`} value={props.selectedValue} ref={changeStrokeWidth} onChange={() => {
            if (changeStrokeWidth.current) {
                props.callback(changeStrokeWidth.current.value);
            }
        }}>
            {props.values.map((item) => {
                return <option key={item} value={item}>{item}</option>
            })}
        </select>
    )
}