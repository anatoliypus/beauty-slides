import React from 'react';
import styles from './ContextMenu.module.css';

export interface MenuItem {
    heading: string;
    callback: () => void;
}

interface ContextMenuProps {
    data: Array<MenuItem>;
    x: string;
    y: string;
    shown: boolean;
}

export default function ContextMenu(props: ContextMenuProps) {
    const visibilityClass = props.shown ? styles.menu_showed : styles.menu_hidden;
    return (
        <div
            className={`${styles.menu} ${visibilityClass}`}
            style={{ top: props.y, left: props.x }}
            onClick={(e) => {
                e.preventDefault()
            }}
        >
            {props.data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={styles.menu__item}
                        onClick={item.callback}
                    >
                        <p>{item.heading}</p>
                    </div>
                );
            })}
        </div>
    );
}
