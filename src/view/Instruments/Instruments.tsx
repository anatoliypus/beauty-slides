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
import { addSlide, importApp } from '../../methods/methods';
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

export default function Instruments() {
  return (
    <div className={styles.instruments}>
      <Button onClick={addSlideButtonOnClick} imgUrl={ PlusIcon } />
      <ContextButton heading='Файл' contextMenuItems={fileBtnContextMenuItems} />
      <ContextButton heading='Слайд' contextMenuItems={slideBtnContextMenuItems} />
      <ContextButton heading='Правка' contextMenuItems={[]} />
      <Button onClick={() => {}} imgUrl={ RectIcon } />
      <Button onClick={() => {}} imgUrl={ TriangIcon } />
      <Button onClick={() => {}} imgUrl={ CircleIcon } />
      <Button onClick={() => {}} imgUrl={ TextIcon } />
      <Button onClick={undo} imgUrl={ UndoIcon } />
      <Button onClick={redo} imgUrl={ RedoIcon } />
    </div>
  )
}