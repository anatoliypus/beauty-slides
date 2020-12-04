import { dispatch, exportAppLocally } from '../../dispatcher';
import { addSlide, importApp, addFigure, addText, deleteSlide, getImageBase64FromDialog, setSlideBg } from '../../methods/methods';

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
        heading: 'Удалить слайд',
        callback: () => {
            dispatch(deleteSlide)
        }
    },
    {
        heading: 'Поставить фоновую картинку',
        callback: async () => {
            let base64 = await getImageBase64FromDialog();
            dispatch(setSlideBg, base64);
        }
    },
]

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