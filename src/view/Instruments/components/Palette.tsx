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
                <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#dbeb33' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#3386eb' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#ff4d4d' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#ff4daf' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#b54dff' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#66d6ff' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#47ffce' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#47ff7b' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#e0ff47' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#ffbf47' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#ff6947' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#000000' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#ffffff' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#F0F8FF' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#DEB887' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#C71585' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#B0C4DE' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#90EE90' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#0000CD' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#40E0D0' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#4B0082' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#708090' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#808000' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#9932CC' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#B22222' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#ADFF2F' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#B8860B' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FF0000' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FF00FF' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FF1493' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFA07A' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFB6C1' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFC0CB' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFD700' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFDAB9' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFDEAD' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFF8DC' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFFACD' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFFAF0' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFFAFA' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFFF00' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFFFE0' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFFFF0' />
                    <ColorBlock type={props.type} changeVisibility={props.changeVisibility} color='#FFFFFF' />
                </div>
            </div>
        </>
    )
}