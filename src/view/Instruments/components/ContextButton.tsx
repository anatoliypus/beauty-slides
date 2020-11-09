import React, { useRef, useEffect, useState } from 'react';
import styles from './ContextButton.module.css';
import ContextMenu, { MenuItem } from './ContextMenu';

interface ComponentButtonProps {
    heading: string;
    contextMenuItems: Array<MenuItem>;
    menuShown: boolean;
    onclick: () => void;
}

export default function ContextButton(props: ComponentButtonProps) {
    const btn = useRef<HTMLButtonElement>(null);
    const [menuVisibility, changeMenuVisibility] = useState(false);
    const [menuX, changeMenuX] = useState('0px');
    const [menuY, changeMenuY] = useState('0px');

    const setMenuCords = () => {
        if (btn.current) {
            changeMenuX(btn.current.getBoundingClientRect().x + 'px');
            changeMenuY(
                btn.current.getBoundingClientRect().y +
                    btn.current.getBoundingClientRect().height +
                    10 +
                    'px'
            );
        }
    };

    useEffect(() => {
        const showMenu = () => {
            changeMenuVisibility(!menuVisibility);
        };
        if (btn.current) {
            btn.current.addEventListener('click', showMenu, { once: true });
        }

        return () => {
            if (btn.current) btn.current.removeEventListener('hover', showMenu);
        };
    });

    useEffect(() => {
        setMenuCords();
    }, [
        document.documentElement.clientHeight,
        document.documentElement.clientWidth,
    ]);

    return (
        <>
            <button ref={btn} className={styles.contextBtn} onClick={props.onclick}>
                <p>{props.heading}</p>
            </button>
            <ContextMenu shown={props.menuShown} data={props.contextMenuItems} x={menuX} y={menuY} />
        </>
    );
}
