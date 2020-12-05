import React from 'react';
import styles from './ColorBlock.module.css';
import { dispatch } from '../../../dispatcher';
import { setSlideBg, changeTextColor, figureBackgroundSet, strokeColorSet } from '../../../methods/methods';

interface ColorBlockProps {
    color: string;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
}

export default function ColorBlock(props: ColorBlockProps) {
    return (
        <div onClick={() => {
            

        }} className={styles.colorBlock} style={{backgroundColor: props.color}}></div>
    )
}