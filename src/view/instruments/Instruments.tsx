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
import App from '../../App';
import ReactDOM from 'react-dom';
import { addSlide } from '../../methods/methods';
import { app } from '../../index';

function addSlideRender() {
  ReactDOM.render(
    <React.StrictMode>
      <App app={addSlide(app)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default function Instruments() {
  return (
    <div className={styles.instruments}>
      <Button onClick={addSlideRender} imgUrl={ PlusIcon } />
      <ContextButton heading='Файл' />
      <ContextButton heading='Слайд' />
      <ContextButton heading='Правка' />
      <Button onClick={() => {}} imgUrl={ RectIcon } />
      <Button onClick={() => {}} imgUrl={ TriangIcon } />
      <Button onClick={() => {}} imgUrl={ CircleIcon } />
      <Button onClick={() => {}} imgUrl={ TextIcon } />
      <Button onClick={() => {}} imgUrl={ UndoIcon } />
      <Button onClick={() => {}} imgUrl={ RedoIcon } />
    </div>
  )
}