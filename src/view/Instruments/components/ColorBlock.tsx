import React from 'react';
import styles from './ColorBlock.module.css';
import { dispatch } from '../../../dispatcher';
import { setSlideBg } from '../../../methods/methods';

interface ColorBlockProps {
    color: string;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ColorBlock(props: ColorBlockProps) {
    return (
        <div onClick={() => {
            dispatch(setSlideBg, props.color);
            props.changeVisibility(false);

        }} className={styles.colorBlock} style={{backgroundColor: props.color}}></div>
    )
}