import React from 'react';
import styles from './ContextMenu.module.css';
import { dispatch } from '../../../dispatcher';
import { changeTextFontFamily } from '../../../methods/methods';

interface FontSelectItemProps {
    data: Array<string>;
    x: string;
    y: string;
    shown: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FontSelectMenu(props: FontSelectItemProps) {
    const visibilityClass = props.shown ? styles.menu_showed : styles.menu_hidden;
    return (
        <div
            className={`${styles.menu} ${visibilityClass}`}
            style={{ top: props.y, left: props.x }}
        >
            {props.data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={styles.menu__item}
                        onClick={() => {
                            dispatch(changeTextFontFamily, item);
                            props.changeVisibility(false);
                        }}
                    >
                        <p style={{fontFamily: item, fontSize: '17px', marginTop: '15px'}}>{item}</p>
                    </div>
                );
            })}
        </div>
    );
}