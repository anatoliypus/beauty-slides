import React from 'react';
import './instruments.css';
import ContextButton from './components/ContextButton';
import Button from './components/FigureButton';
import RectIcon from './img/rectangle.svg';
import TriangIcon from './img/triangle.svg';
import CircleIcon from './img/circle.svg';
import TextIcon from './img/text.svg';
import PlusIcon from './img/plus.svg';
import UndoIcon from './img/undo.svg';
import RedoIcon from './img/redo.svg';
// import App from '../../App';
// import ReactDOM from 'react-dom';
// import { addSlide } from '../../methods/methods';

export default function Instruments() {
  return (
    <div id='instruments'>
      <Button func={() => {}} imgUrl={ PlusIcon } />
      <ContextButton heading='Файл' />
      <ContextButton heading='Слайд' />
      <ContextButton heading='Правка' />
      <Button func={() => {}} imgUrl={ RectIcon } />
      <Button func={() => {}} imgUrl={ TriangIcon } />
      <Button func={() => {}} imgUrl={ CircleIcon } />
      <Button func={() => {}} imgUrl={ TextIcon } />
      <Button func={() => {}} imgUrl={ UndoIcon } />
      <Button func={() => {}} imgUrl={ RedoIcon } />
    </div>
  )
}