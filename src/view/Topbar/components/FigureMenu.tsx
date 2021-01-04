import React from 'react';
import { AppType, FigureObject } from '../../../model/model';
import styles from './ObjectsMenu.module.css';
import {
    getSlideNode,
    getCurrentSlide,
} from '../../../methods/secondaryMethods';
import { dispatch } from '../../../dispatcher';
import Palette from './Palette';
import { strokeResize, changeRectBorderRadius } from '../../../methods/methods';
import SelectElement from './SelectElement';
import ManageZIndex from './ManageZIndex';

interface FigureMenuProps {
    app: AppType;
}


export default function FigureMenu(props: FigureMenuProps) {
    const slide = getCurrentSlide(props.app);
    let node;
    if (slide) {
        node = getSlideNode(slide, props.app.choosedObject.id);
    } else throw new Error();

    let strokeWidth;
    let figure;
    let radius;

    if (node && node.type === 'figure') {
        strokeWidth = (node as FigureObject).strokeWidth;
        figure = (node as FigureObject).figure;
        radius = (node as FigureObject).borderRadius;
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
    const radiusValues = ['0', '6', '10', '14', '18', '20', '25', '30', '35', '40', '50'];

    const radiusStyle = figure === 'rectangle' ? {display: 'flex', alignItems: 'center'} : {display: 'none'};

    return (
        <div className={styles.objectsMenu}>
            <p className={styles.label}>
                Толщина к-ра:
            </p>
            <SelectElement selectedValue={strokeWidth + ''} values={strokeValues} callback={(value) => {
                dispatch(
                    strokeResize,
                    parseInt(value)
                );
            }}/>
            <div style={radiusStyle}>
                <p className={styles.label}>
                    Закруг-ие к-ра:
                </p>
                <SelectElement selectedValue={radius + ''} values={radiusValues} callback={(value) => {
                    dispatch(
                        changeRectBorderRadius,
                        parseInt(value)
                    );
                }}/>
            </div>
            <button
                className={`${styles.changeBtn} ${styles.objectsMenuNode}`}
                onClick={() => {
                    changeFigureStrokePaletteVisibility(true);
                }}
            >
                Цвет к-ра
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
            <ManageZIndex />
        </div>
    );
}
