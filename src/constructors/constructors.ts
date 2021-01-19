import { defaultFigureImgSize, defaultFigureStrokeWidth, defaultFontFamily, defaultFontSize, defaultTextBlockHeight, defaultTextBlockWidth, defaultTextData, defaultTextWeight, objectsInitialX, objectsInitialY, slideHeight, slideWidth } from '..';
import {
    SettingsObject,
    SlideType,
    AppType,
    ImgObject,
    TextObject,
    ObjectsList,
    FigureType,
    FigureObject,
} from '../model/model';
import hexRgb from 'hex-rgb';

export function getDefaultColor(background: string | null): string {
    let color = '#000000';
    if (background && background.indexOf('#') !== -1) {
        const rgb = hexRgb(background);
        const l = Math.sqrt( 0.299*rgb.red^2 + 0.587*rgb.green^2 + 0.114*rgb.blue^2 );
        if (l <= 5) color = '#ffffff';
    }
    return color;
}

function createId(): string {
    return String(Math.floor(Number(Date.now()) * Math.random()));
}

function createSlide(): SlideType {
    let objectsArr: ObjectsList = [];
    return {
        id: constructors.createId(),
        objects: objectsArr,
        background: '#fff',
        nextZIndex: 0,
    };
}

function createSettings(): SettingsObject {
    return {
        slideWidth: slideWidth,
        slideHeight: slideHeight,
    };
}

function createApp(settings: SettingsObject): AppType {
    const slide: SlideType = createSlide();
    return {
        name: 'presentation.',
        slides: {
            current: slide.id,
            slides: [slide],
        },
        choosedObject: {
            id: null,
            type: null,
        },
        settings: settings,
        bufferedObject: null,
        usedColors: [],
    };
}

function createImage(path: string, zIndex: number, k: number): ImgObject {
    return {
        id: constructors.createId(),
        type: 'img',
        path: path,
        width: defaultFigureImgSize,
        height: defaultFigureImgSize / k,
        positionTopLeft: { x: objectsInitialX, y: objectsInitialY },
        zIndex: zIndex,
    };
}

function createFigure(type: FigureType, zIndex: number): FigureObject {
    return {
        id: constructors.createId(),
        type: 'figure',
        figure: type,
        width: defaultFigureImgSize,
        height: defaultFigureImgSize,
        positionTopLeft: { x: objectsInitialX, y: objectsInitialY },
        strokeColor: '#000',
        background: '#fff',
        strokeWidth: defaultFigureStrokeWidth,
        borderRadius: 0,
        zIndex: zIndex,
    };
}

function createText(zIndex: number, background: string | null): TextObject {
    const c = getDefaultColor(background);
    return {
        id: constructors.createId(),
        type: 'text',
        width: defaultTextBlockWidth,
        height: defaultTextBlockHeight,
        positionTopLeft: { x: objectsInitialX, y: objectsInitialY },
        fontStyle: 'unset',
        fontDecoration: 'unset',
        fontFamily: defaultFontFamily,
        fontSize: defaultFontSize,
        color: c,
        data: defaultTextData,
        fontWeight: defaultTextWeight,
        alignment: 'left',
        zIndex: zIndex
    };
}

const constructors = {
    createId,
    createSlide,
    createSettings,
    createApp,
    createImage,
    createText,
    createFigure,
};

export default constructors;
