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
    dispatch(addSlide)
}

const fileBtnContextMenuItems = [
    {
        heading: 'Импорт',
        callback: importApp
    },
    {
        heading: 'Сохранить локально',
        callback: exportAppLocally
    }
]

const slideBtnContextMenuItems = [
    {
        heading: 'Залить цветом',
        callback: () => alert()
    },
    {
        heading: 'Пост. фоновое изобр.',
        callback: () => alert()
    }
]

function addRectangleToSlide(){
    dispatch(addFigure, 'rectangle');
}

function addTriangleToSlide(){
    dispatch(addFigure, 'triangle');
}

function addCircleToSlide(){
    dispatch(addFigure, 'circle');
}

function addTextToSlide(){
    dispatch(addText);
}

export default function Instruments() {
  return (
    <div className={styles.instruments}>
      <Button onClick={addSlideButtonOnClick} imgUrl={ PlusIcon } />
      <ContextButton heading='Файл' contextMenuItems={fileBtnContextMenuItems} />
      <ContextButton heading='Слайд' contextMenuItems={slideBtnContextMenuItems} />
      <ContextButton heading='Правка' contextMenuItems={[]} />
      <Button onClick={addRectangleToSlide} imgUrl={ RectIcon } />
      <Button onClick={addTriangleToSlide} imgUrl={ TriangIcon } />
      <Button onClick={addCircleToSlide} imgUrl={ CircleIcon } />
      <Button onClick={addTextToSlide} imgUrl={ TextIcon } />
      <Button onClick={undo} imgUrl={ UndoIcon } />
      <Button onClick={redo} imgUrl={ RedoIcon } />
    </div>
  )
}