import React from 'react';
import styles from './ColorBlock.module.css';
import { dispatch } from '../../../dispatcher';
import { setSlideBg, changeTextColor } from '../../../methods/methods';

interface ColorBlockProps {
    color: string;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
}

export default function ColorBlock(props: ColorBlockProps) {
    return (
        <div onClick={() => {
            if (props.type === 'slide') {
                dispatch(setSlideBg, props.color);
            } else if (props.type === 'textColor') {
                dispatch(changeTextColor, props.color)
            }
            props.changeVisibility(false);

        }} className={styles.colorBlock} style={{backgroundColor: props.color}}></div>
    )
}