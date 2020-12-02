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
import { dispatch } from '../../../dispatcher';
import {
    changeTextSize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText,
} from '../../../methods/methods';
import Palette from './Palette';
import SelectElement from './SelectElement';

interface TextMenuProps {
    app: AppType;
}

export default function TextMenu(props: TextMenuProps) {
    const changeFontSize = React.useRef<HTMLSelectElement>(null);
    const slide = getCurrentSlide(props.app);

    let node;
    if (slide) {
        node = getSlideNode(slide, props.app.choosedObjectId);
    } else throw new Error();

    let fontSize;
    if (node && node.type === 'text') {
        fontSize = (node as TextObject).fontSize;
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
            <img src={fontSizeIcon} alt="font-size" className={styles.icon} />
            <SelectElement
                selectedValue={fontSize}
                values={fontSizeValues}
                callback={(value) => {
                    dispatch(changeTextSize, value);
                }}
            />
            <button
                className={styles.btn}
                onClick={() => {
                    dispatch(toggleBoldText);
                }}
            >
                <img src={boldIcon} alt="toggle text bold" />
            </button>
            <button
                className={styles.btn}
                onClick={() => {
                    dispatch(toggleItalicText);
                }}
            >
                <img src={italicIcon} alt="toggle text italic" />
            </button>
            <button
                className={styles.btn}
                onClick={() => {
                    dispatch(toggleUnderlinedText);
                }}
            >
                <img src={underlinedIcon} alt="toggle text underlined" />
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
        </div>
    );
}
