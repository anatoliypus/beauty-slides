import React from 'react';
import { AppType, choosedObjectType, FigureObject, SlideCollection } from '../../../model/model';
import styles from './ObjectsMenu.module.css';
import {
    getSlideNode,
    getCurrentSlide,
} from '../../../methods/newSecondaryMethods';
import Palette from './Palette';
import { strokeResize, changeRectBorderRadius } from '../../../actions/actionsCreators';
import SelectElement from './SelectElement';
import ManageZIndex from './ManageZIndex';
import { connect } from 'react-redux';

interface FigureMenuProps {
    choosedObject: choosedObjectType;
    slides: SlideCollection;
    currSlideId: string | null;
    strokeResize: (s: number) => void;
    changeRectBorderRadius: (r: number) => void;
}


function FigureMenu(props: FigureMenuProps) {
    if (! props.currSlideId) throw new Error();
    const slide = getCurrentSlide(props.slides, props.currSlideId);
    let node;
    if (slide) {
        node = getSlideNode(slide, props.choosedObject.id);
    } else throw new Error();

    let strokeWidth;
    let figure;
    let radius;

    if (node && node.type === 'figure') {
        strokeWidth = (node as FigureObject).strokeWidth;
        figure = (node as FigureObject).figure;
        radius = (node as FigureObject).borderRadius;
    } else throw new Error();

    const [
        isFigureBgPaletteVisible,
        changeFigureBgPaletteVisibility,
    ] = React.useState(false);

    const [
        isFigureStrokePaletteVisible,
        changeFigureStrokePaletteVisibility,
    ] = React.useState(false);

    const strokeValues = [0, 1, 2, 3, 4, 5];
    const radiusValues = [0, 6, 10, 14, 18, 20, 25, 30, 35, 40, 50];

    const radiusStyle = figure === 'rectangle' ? {display: 'flex', alignItems: 'center'} : {display: 'none'};

    return (
        <div className={styles.objectsMenu}>
            <p className={styles.label}>
                Толщина к-ра:
            </p>
            <SelectElement selectedValue={strokeWidth} values={strokeValues} callback={(value) => {
                props.strokeResize(value)
            }}/>
            <div style={radiusStyle}>
                <p className={styles.label}>
                    Закруг-ие к-ра:
                </p>
                <SelectElement selectedValue={radius} values={radiusValues} callback={(value) => {
                    props.changeRectBorderRadius(value);
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

interface FigureMenuOwnProps {
    choosedObject: choosedObjectType;
    slides: SlideCollection;
    currSlideId: string | null;
}

const mapStateToProps = (state: AppType): FigureMenuOwnProps => {
    return {
        choosedObject: state.choosedObject,
        slides: state.slides,
        currSlideId: state.currSlideId
    }
}

const mapDispatchToProps = {
    strokeResize, 
    changeRectBorderRadius
}

export default connect(mapStateToProps, mapDispatchToProps)(FigureMenu);