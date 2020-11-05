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
    class: string;
}

export default function ContextMenu(props: ContextMenuProps) {
    return (
        <div className={`${styles.menu} ${props.class}`} style={{top: props.y, left: props.x}}>
            {props.data.map((item, index) => {
                return (
                    <div key={index} className={styles.menu__item} onClick={item.callback}>
                        <p>{item.heading}</p>
                    </div>
                );
            })}
        </div>
    );
}
