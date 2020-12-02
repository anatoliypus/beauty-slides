import React from 'react';
import { AppType, FigureObject } from '../../../model/model';
import styles from './ObjectsMenu.module.css';
import {
    getSlideNode,
    getCurrentSlide,
} from '../../../methods/secondaryMethods';
import { dispatch } from '../../../dispatcher';
import Palette from './Palette';
import { strokeResize } from '../../../methods/methods';
import SelectElement from './SelectElement';

interface FigureMenuProps {
    app: AppType;
}


export default function FigureMenu(props: FigureMenuProps) {
    const slide = getCurrentSlide(props.app);
    let node;
    if (slide) {
        node = getSlideNode(slide, props.app.choosedObjectId);
    } else throw new Error();

    let strokeWidth;

    if (node && node.type === 'figure') {
        strokeWidth = (node as FigureObject).strokeWidth;
    }

    const [
        isFigureBgPaletteVisible,
        changeFigureBgPaletteVisibility,
    ] = React.useState(false);

    const [
        isFigureStrokePaletteVisible,
        changeFigureStrokePaletteVisibility,
    ] = React.useState(false);

    const strokeValues = ['1', '2', '3', '4', '5'];

    return (
        <div className={styles.objectsMenu}>
            <p className={styles.label}>
                Толщина контура:
            </p>
            <SelectElement selectedValue={strokeWidth + ''} values={strokeValues} callback={(value) => {
                dispatch(
                    strokeResize,
                    parseInt(value)
                );
            }}/>
            <button
                className={`${styles.changeBtn} ${styles.objectsMenuNode}`}
                onClick={() => {
                    changeFigureStrokePaletteVisibility(true);
                }}
            >
                Цвет контура
            </button>
            <button
                className={`${styles.changeBtn} ${styles.objectsMenuNode}`}
                onClick={() => {
                    changeFigureBgPaletteVisibility(true);
                }}
            >
                Цвет фона
            </button>
            <Palette
                visibility={isFigureBgPaletteVisible}
                changeVisibility={changeFigureBgPaletteVisibility}
                type={'figureBG'}
            />
            <Palette
                visibility={isFigureStrokePaletteVisible}
                changeVisibility={changeFigureStrokePaletteVisibility}
                type={'strokeColor'}
            />
        </div>
    );
}
