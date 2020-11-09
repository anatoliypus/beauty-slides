import React from 'react';
import styles from './Instruments.module.css';
import ContextButton from './components/ContextButton';
import Button from './components/FigureButton';
import RectIcon from './img/rectangle.svg';
import TriangIcon from './img/triangle.svg';
import CircleIcon from './img/circle.svg';
import TextIcon from './img/text.svg';
import PlusIcon from './img/plus.svg';
import UndoIcon from './img/undo.svg';
import RedoIcon from './img/redo.svg';
import { addSlide, importApp, addFigure, addText } from '../../methods/methods';
import { dispatch, undo, redo, exportAppLocally } from '../../dispatcher';

function addSlideButtonOnClick(): void {
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

const slideBtnContextMenuItems = [
    {
        heading: 'Залить цветом',
        callback: () => alert(),
    },
    {
        heading: 'Пост. фоновое изобр.',
        callback: () => alert(),
    },
];

const contextBtns = [
    {
        heading: 'Файл',
        menu: fileBtnContextMenuItems,
    },
    {
        heading: 'Слайд',
        menu: slideBtnContextMenuItems,
    },
    {
        heading: 'Правка',
        menu: [],
    },
];

function addRectangleToSlide() {
    dispatch(addFigure, 'rectangle');
}

function addTriangleToSlide() {
    dispatch(addFigure, 'triangle');
}

function addCircleToSlide() {
    dispatch(addFigure, 'circle');
}

function addTextToSlide() {
    dispatch(addText);
}

export default function Instruments() {
    const defaultState: any = {};
    contextBtns.forEach((item) => {
        defaultState[item.heading] = false;
    });
    const [contextMenuState, changeContextMenuState] = React.useState(defaultState);
    return (
        <div className={styles.instruments}>
            <Button onClick={addSlideButtonOnClick} imgUrl={PlusIcon} />
            {contextBtns.map((item, index) => {
                return (
                    <ContextButton
                        key={index}
                        menuShown={contextMenuState[item.heading]}
                        heading={item.heading}
                        contextMenuItems={item.menu}
                        onclick={() => {
                            const newState = {...contextMenuState};
                            for (let key in newState) if (key !== item.heading) newState[key] = false;
                            newState[item.heading] = ! newState[item.heading];
                            changeContextMenuState(newState);
                        }}
                    />
                );
            })}
            <Button onClick={addRectangleToSlide} imgUrl={RectIcon} />
            <Button onClick={addTriangleToSlide} imgUrl={TriangIcon} />
            <Button onClick={addCircleToSlide} imgUrl={CircleIcon} />
            <Button onClick={addTextToSlide} imgUrl={TextIcon} />
            <Button onClick={undo} imgUrl={UndoIcon} />
            <Button onClick={redo} imgUrl={RedoIcon} />
        </div>
    );
}
