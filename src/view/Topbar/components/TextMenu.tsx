import React from 'react';
import { AppType, choosedObjectType, SlideCollection, TextObject } from '../../../model/model';
import styles from './ObjectsMenu.module.css';
import fontSizeIcon from '../img/font-size.svg';
import {
    getSlideNode,
    getCurrentSlide,
} from '../../../methods/newSecondaryMethods';
import boldIcon from '../img/bold.svg';
import italicIcon from '../img/italic.svg';
import underlinedIcon from '../img/underlined.svg';
import rightAlignment from '../img/text-right.svg';
import leftAlignment from '../img/text-left.svg';
import centerAlignment from '../img/text-center.svg';
import {
    changeTextFontSize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText,
    changeTextAlignment,
} from '../../../actions/actionsCreators';
import Palette from './Palette';
import SelectElement from './SelectElement';
import ManageZIndex from './ManageZIndex';
import FontSelect from './FontSelect';
import { fonts } from '../../../index';
import { connect } from 'react-redux';

interface TextMenuProps {
    slides: SlideCollection;
    choosedObject: choosedObjectType;
    currSlideId: string | null;
    changeTextFontSize: (s: string) => void;
    toggleBoldText: () => void;
    toggleItalicText: () => void;
    toggleUnderlinedText: () => void;
    changeTextAlignment: (a: 'center' | 'right' | 'left') => void;
}

function TextMenu(props: TextMenuProps) {
    if (! props.currSlideId) throw new Error();
    const slide = getCurrentSlide(props.slides, props.currSlideId);

    let node;
    if (slide) {
        node = getSlideNode(slide, props.choosedObject.id);
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
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19,
        21,
        23,
        25,
        27,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
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
                    props.changeTextFontSize(value);
                }}
            />
            <button
                className={
                    isBold ? `${styles.btn} + ${styles.activeBtn}` : styles.btn
                }
                onClick={() => {
                    toggleBoldText();
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
                    props.toggleItalicText();
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
                    props.toggleUnderlinedText();
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
                    props.changeTextAlignment('left');
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
                    props.changeTextAlignment('center');
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
                    props.changeTextAlignment('right');
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

interface TextMenuOwnProps {
    slides: SlideCollection;
    choosedObject: choosedObjectType;
    currSlideId: string | null;
}

const mapStateToProps = (state: AppType): TextMenuOwnProps => {
    return {
        choosedObject: state.choosedObject,
        slides: state.slides,
        currSlideId: state.currSlideId
    }
}

const mapDispatchToProps = {
    changeTextFontSize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText,
    changeTextAlignment
}

export default connect(mapStateToProps, mapDispatchToProps)(TextMenu);