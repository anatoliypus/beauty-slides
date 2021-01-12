import React from 'react';
import ManageZIndex from './ManageZIndex';
import styles from './ObjectsMenu.module.css';

export default function ImageMenu() {
    return (
        <div className={styles.objectsMenu}>
            <ManageZIndex />
        </div>
    )
}