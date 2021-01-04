import { dispatch, exportAppLocally } from '../../dispatcher';
import {
    addSlide,
    importApp,
    addFigure,
    addText,
    deleteSlide,
    getImageBase64FromDialog,
    setSlideBg,
    copyObject,
    pasteObject,
    deleteSlideObject
} from '../../methods/methods';

export function addSlideButtonOnClick(): void {
    dispatch(addSlide);
}

const fileBtnContextMenuItems = [
    {
        heading: 'Импорт',
        callback: importApp,
    },
    {
        heading: 'Сохранить локально',
        callback: exportAppLocally,
    },
];

const editBtnContextMenuItems = [
    {
        heading: 'Удалить текущий слайд',
        callback: () => {
            dispatch(deleteSlide);
        },
    },
    {
        heading: 'Поставить фоновую картинку на слайд',
        callback: async () => {
            let base64 = await getImageBase64FromDialog();
            dispatch(setSlideBg, base64);
        },
    },
    {
        heading: 'Копировать слайд/объект ------ Ctrl/Cmd + C',
        callback: () => {
            dispatch(copyObject);
        },
    },
    {
        heading: 'Вставить слайд/объект ------ Ctrl/Cmd + V',
        callback: () => {
            dispatch(pasteObject);
        },
    },
    {
        heading: 'Удалить выбранный объект ------ Ctrl/Cmd + D',
        callback: () => {
            dispatch(deleteSlideObject);
        },
    },
    
];

export const contextBtns = [
    {
        heading: 'Файл',
        menu: fileBtnContextMenuItems,
    },
    {
        heading: 'Правка',
        menu: editBtnContextMenuItems,
    },
];

export function addRectangleToSlide() {
    dispatch(addFigure, 'rectangle');
}

export function addTriangleToSlide() {
    dispatch(addFigure, 'triangle');
}

export function addCircleToSlide() {
    dispatch(addFigure, 'circle');
}

export function addLineToSlide() {
    dispatch(addFigure, 'line');
}

export function addTextToSlide() {
    dispatch(addText);
}
