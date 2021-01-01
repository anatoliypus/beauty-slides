import React from 'react';
import { AppType, TextObject } from '../../../model/model';
import styles from './ObjectsMenu.module.css';
import fontSizeIcon from '../img/font-size.svg';
import {
    getSlideNode,
    getCurrentSlide,
} from '../../../methods/secondaryMethods';
import boldIcon from '../img/bold.svg';
import italicIcon from '../img/italic.svg';
import underlinedIcon from '../img/underlined.svg';
import rightAlignment from '../img/text-right.svg';
import leftAlignment from '../img/text-left.svg';
import centerAlignment from '../img/text-center.svg';
import { dispatch } from '../../../dispatcher';
import {
    changeTextSize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText,
    changeAlignment
} from '../../../methods/methods';
import Palette from './Palette';
import SelectElement from './SelectElement';
import ManageZIndex from './ManageZIndex';
import FontSelect from './FontSelect';
import { fonts } from '../../../index';

interface TextMenuProps {
    app: AppType;
}

export default function TextMenu(props: TextMenuProps) {
    const slide = getCurrentSlide(props.app);

    let node;
    if (slide) {
        node = getSlideNode(slide, props.app.choosedObjectId);
    } else throw new Error();

    let fontSize;
    let alignment;
    let isBold;
    let isItalic;
    let isUnderlined;
    let fontFamily;
    if (node && node.type === 'text') {
        fontSize = (node as TextObject).fontSize;
        fontFamily = (node as TextObject).fontFamily;
        alignment = (node as TextObject).alignment;
        isBold = (node as TextObject).fontWeight === 700;
        isItalic = (node as TextObject).fontStyle === 'italic';
        isUnderlined = (node as TextObject).fontDecoration === 'underline';
    } else throw new Error();

    const [
        isTextColorPaletteVisible,
        changeTextColorPaletteVisibility,
    ] = React.useState(false);

    const fontSizeValues = [
        '5px',
        '7px',
        '9px',
        '11px',
        '13px',
        '15px',
        '17px',
        '19px',
        '21px',
        '23px',
        '25px',
        '27px',
        '30px',
        '35px',
        '40px',
        '45px',
        '50px',
        '55px',
        '60px',
    ];

    return (
        <div className={styles.objectsMenu}>
            <p className={styles.label}>Шрифт:</p>
            <FontSelect selected={fontFamily} fonts={fonts} />
            <img src={fontSizeIcon} alt="font-size" className={styles.icon} />
            <SelectElement
                selectedValue={fontSize}
                values={fontSizeValues}
                callback={(value) => {
                    dispatch(changeTextSize, value);
                }}
            />
            <button
                className={
                    isBold ? `${styles.btn} + ${styles.activeBtn}` : styles.btn
                }
                onClick={() => {
                    dispatch(toggleBoldText);
                }}
            >
                <img src={boldIcon} alt="toggle text bold" />
            </button>
            <button
                className={
                    isItalic
                        ? `${styles.btn} + ${styles.activeBtn}`
                        : styles.btn
                }
                onClick={() => {
                    dispatch(toggleItalicText);
                }}
            >
                <img src={italicIcon} alt="toggle text italic" />
            </button>
            <button
                className={
                    isUnderlined
                        ? `${styles.btn} + ${styles.activeBtn}`
                        : styles.btn
                }
                onClick={() => {
                    dispatch(toggleUnderlinedText);
                }}
            >
                <img src={underlinedIcon} alt="toggle text underlined" />
            </button>
            <button
                className={
                    alignment === 'left'
                        ? `${styles.btn} + ${styles.activeBtn}`
                        : styles.btn
                }
                onClick={() => {
                    dispatch(changeAlignment, 'left');
                }}
            >
                <img src={leftAlignment} alt="toggle left alignment" />
            </button>
            <button
                className={
                    alignment === 'center'
                        ? `${styles.btn} + ${styles.activeBtn}`
                        : styles.btn
                }
                onClick={() => {
                    dispatch(changeAlignment, 'center');
                }}
            >
                <img src={centerAlignment} alt="toggle center alignment" />
            </button>
            <button
                className={
                    alignment === 'right'
                        ? `${styles.btn} + ${styles.activeBtn}`
                        : styles.btn
                }
                onClick={() => {
                    dispatch(changeAlignment, 'right');
                }}
            >
                <img src={rightAlignment} alt="toggle right alignment" />
            </button>
            <button
                className={`${styles.changeBtn} ${styles.objectsMenuNode}`}
                onClick={() => {
                    changeTextColorPaletteVisibility(true);
                }}
            >
                Цвет текста
            </button>
            <Palette
                visibility={isTextColorPaletteVisible}
                changeVisibility={changeTextColorPaletteVisibility}
                type={'textColor'}
            />
            <ManageZIndex />
        </div>
    );
}
