import React from 'react';
import './instruments.css';
import ContextButton from './components/ContextButton';

export default function Instruments() {
  return (
    <div id='instruments'>
      <ContextButton heading='Файл' />
      <ContextButton heading='Слайд' />
      <ContextButton heading='Правка' />
      <hr id='divisor' />
    </div>
  )
}