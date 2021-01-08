// import { dispatch, exportAppLocally } from '../../../dispatcher';
import { store } from '../../../index';
import {
    addSlide,
    addFigure,
    addText,
    deleteSlide,
    setSlideBg,
    copyObject,
    pasteObject,
    deleteSlideObject,
    exportApp
} from '../../../actions/actionsCreators';
import { getImageBase64FromDialog } from '../../../methods/getImageBase64';
import { importApp } from '../../../methods/jsonMethods';

export function addSlideButtonOnClick(): void {
    store.dispatch(addSlide());
}

const fileBtnContextMenuItems = [
    {
        heading: 'Импорт',
        callback: importApp,
    },
    {
        heading: 'Сохранить локально',
        callback: () => {
            store.dispatch(exportApp())
        },
    },
];

const editBtnContextMenuItems = [
    {
        heading: 'Удалить текущий слайд ------ Ctrl/Cmd + Shift + D',
        callback: () => {
            store.dispatch(deleteSlide());
        },
    },
    {
        heading: 'Поставить фоновую картинку на слайд',
        callback: async () => {
            let base64 = await getImageBase64FromDialog();
            store.dispatch(setSlideBg(base64));
        },
    },
    {
        heading: 'Копировать слайд/объект ------ Ctrl/Cmd + C',
        callback: () => {
            store.dispatch(copyObject());
        },
    },
    {
        heading: 'Вставить слайд/объект ------ Ctrl/Cmd + V',
        callback: () => {
            store.dispatch(pasteObject());
        },
    },
    {
        heading: 'Удалить выбранный объект ------ Ctrl/Cmd + D',
        callback: () => {
            store.dispatch(deleteSlideObject());
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
    store.dispatch(addFigure('rectangle'));
}

export function addTriangleToSlide() {
    store.dispatch(addFigure('triangle'));
}

export function addCircleToSlide() {
    store.dispatch(addFigure('circle'));
}

export function addLineToSlide() {
    store.dispatch(addFigure('line'));
}

export function addTextToSlide() {
    store.dispatch(addText());
}
