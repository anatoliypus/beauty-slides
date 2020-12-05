import React from 'react';
import styles from './Palette.module.css';
import { dispatch } from '../../../dispatcher';
import { setSlideBg, changeTextColor, figureBackgroundSet, strokeColorSet } from '../../../methods/methods';

interface ChangeOwnColorProps {
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChangeOwnColor(props: ChangeOwnColorProps) {
    const ref = React.useRef<HTMLInputElement>(null);
    const [color, changeColor] = React.useState<string>('#000000');
    const submit = () => {
        if (ref.current) {
            if (props.type === 'slide') {
                dispatch(setSlideBg, color);
            } else if (props.type === 'textColor') {
                dispatch(changeTextColor, color)
            } else if (props.type === 'figureBG') {
                dispatch(figureBackgroundSet, color)
            } else if (props.type === 'strokeColor') {
                dispatch(strokeColorSet, color)
            }
            props.changeVisibility(false);
        }
    }
    React.useEffect(() => {
        if (ref.current) {
            changeColor(ref.current.value);
        }
    }, []);
    return (
        <div className={styles.changeColorBlock}>
            <p>Или свой здесь:</p>
            <input
                ref={ref}
                type="color"
                className={styles.colorsInput}
                value="#000000"
                onChange={(e) => {if (ref.current) changeColor(ref.current.value)}}
            />
            <button onClick={submit} className={styles.applyBtn}>Применить</button>
        </div>
    );
}
