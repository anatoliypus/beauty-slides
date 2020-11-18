import React from 'react';
import styles from './Palette.module.css';
import closeIcon from '../img/close.svg';
import ColorBlock from './ColorBlock';

interface PaletteProps {
    visibility: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Palette(props: PaletteProps) {
    return (
        <>
            <div className={props.visibility ? `${styles.shadow} ${styles.shadow_visible}` : `${styles.shadow} ${styles.shadow_hidden}`}></div>

            <div className={props.visibility ? `${styles.palette} ${styles.palette_visible}` : `${styles.palette} ${styles.palette_hidden}`}>
                <img className={styles.palette__closeIcon} src={closeIcon} alt="close" onClick={function() {
                    props.changeVisibility(false);
                }}/>
                <p className={styles.palette__heading}>Цвет фона слайда</p>
                <div className={styles.palette__colorBlocksList}>
                    <ColorBlock changeVisibility={props.changeVisibility} color='green' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='yellow' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='blue' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='red' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='purple' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='brown' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='pink' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='green' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='red' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='yellow' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='blue' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='purple' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='brown' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='pink' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='green' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='red' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='yellow' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='blue' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='purple' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='brown' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='pink' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='pink' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='green' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='red' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='yellow' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='blue' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='purple' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='brown' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='pink' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='pink' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='green' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='red' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='yellow' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='blue' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='purple' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='brown' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='pink' />
                    <ColorBlock changeVisibility={props.changeVisibility} color='orange' />
                </div>
            </div>
        </>
    )
}