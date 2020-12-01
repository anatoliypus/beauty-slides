import React from 'react';
import { AppType } from '../../../model/model';
import Palette from './Palette';
import styles from './ObjectsMenu.module.css';
import fontSizeIcon from '../img/font-size.svg';
import {
    getSlideNode,
    getCurrentSlide,
} from '../../../methods/secondaryMethods';
import { TextObject, FigureObject } from '../../../model/model';
import { dispatch } from '../../../dispatcher';
import { changeTextSize, strokeResize } from '../../../methods/methods';

interface FigureMenuProps {
    app: AppType;
}

export default function ObjectsMenu(props: FigureMenuProps) {
    const ifFigure = props.app.choosedObjectType === 'figure';
    const ifText = props.app.choosedObjectType === 'text';
    const ifImg = props.app.choosedObjectType === 'img';

    const displayNoneStyle = { display: 'none' };

    const textStyle = ifText ? {} : displayNoneStyle;
    const figureStyle = ifFigure ? {} : displayNoneStyle;
    const imgStyle = ifImg ? {} : displayNoneStyle;

    const slide = getCurrentSlide(props.app);
    let node;
    if (slide) {
        node = getSlideNode(slide, props.app.choosedObjectId);
    }

    let fontSize;

    let strokeWidth;

    if (node) {
        if (node.type === 'text' && ifText) {
            fontSize = parseInt((node as TextObject).fontSize);
        }
        if (node.type === 'figure' && ifFigure) {
            strokeWidth = (node as FigureObject).strokeWidth;
        }
    }

    const [
        isTextColorPaletteVisible,
        changeTextColorPaletteVisibility,
    ] = React.useState(false);
    const [
        isFigureBgPaletteVisible,
        changeFigureBgPaletteVisibility,
    ] = React.useState(false);
    const [
        isFigureStrokePaletteVisible,
        changeFigureStrokePaletteVisibility,
    ] = React.useState(false);

    const changeFontSize = React.useRef<HTMLSelectElement>(null);
    const changeStrokeWidth = React.useRef<HTMLSelectElement>(null);
    return (
        <>
            <div
                className={styles.objectsMenu}
                style={{
                    display: props.app.choosedObjectId === '' ? 'none' : 'flex',
                }}
            >
                <img
                    src={fontSizeIcon}
                    alt="font-size"
                    className={styles.icon}
                    style={textStyle}
                />
                <select
                    ref={changeFontSize}
                    style={textStyle}
                    className={styles.objectsMenuNode}
                    value={fontSize}
                    onChange={(e) => {
                        if (changeFontSize.current) {
                            dispatch(
                                changeTextSize,
                                changeFontSize.current.value + 'px'
                            );
                        }
                    }}
                >
                    <option value="5">5</option>
                    <option value="7">7</option>
                    <option value="9">9</option>
                    <option value="11">11</option>
                    <option value="13">13</option>
                    <option value="15">15</option>
                    <option value="17">17</option>
                    <option value="19">19</option>
                    <option value="21">21</option>
                    <option value="23">23</option>
                    <option value="25">25</option>
                    <option value="27">27</option>
                    <option value="29">29</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                </select>
                <p className={styles.label} style={figureStyle}>
                    Толщина контура:
                </p>
                <select
                    ref={changeStrokeWidth}
                    style={figureStyle}
                    className={styles.objectsMenuNode}
                    value={strokeWidth}
                    onChange={() => {
                        if (changeStrokeWidth.current) {
                            console.log();
                            dispatch(
                                strokeResize,
                                parseInt(changeStrokeWidth.current.value)
                            );
                        }
                    }}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button
                    style={textStyle}
                    className={`${styles.changeBtn} ${styles.objectsMenuNode}`}
                    onClick={() => {
                        changeTextColorPaletteVisibility(true);
                    }}
                >
                    Цвет текста
                </button>
                <button
                    style={figureStyle}
                    className={`${styles.changeBtn} ${styles.objectsMenuNode}`}
                    onClick={() => {
                        changeFigureBgPaletteVisibility(true);
                    }}
                >
                    Цвет фона
                </button>
                <button
                    style={figureStyle}
                    className={`${styles.changeBtn} ${styles.objectsMenuNode}`}
                    onClick={() => {
                        changeFigureStrokePaletteVisibility(true);
                    }}
                >
                    Цвет контура
                </button>
            </div>
            <Palette
                visibility={isTextColorPaletteVisible}
                changeVisibility={changeTextColorPaletteVisibility}
                type={'textColor'}
            />
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
        </>
    );
}
