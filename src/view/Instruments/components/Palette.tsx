import React from 'react';
import styles from './Palette.module.css';
import closeIcon from '../img/close.svg';
import ColorBlock from './ColorBlock';

interface PaletteProps {
    visibility: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
}

export default function Palette(props: PaletteProps) {
    return (
        <>
            <div className={props.visibility ? `${styles.shadow} ${styles.shadow_visible}` : `${styles.shadow} ${styles.shadow_hidden}`}></div>

            <div className={props.visibility ? `${styles.palette} ${styles.palette_visible}` : `${styles.palette} ${styles.palette_hidden}`}>
                <img className={styles.palette__closeIcon} src={closeIcon} alt="close" onClick={function() {
                    props.changeVisibility(false);
                }}/>
                <p className={styles.palette__heading}>Выбери цвет!</p>
                <div className={styles.palette__colorBlocksList}>
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#3f9263' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#dbeb33' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#3386eb' />
                </div>
            </div>
        </>
    )
}