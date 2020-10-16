import React from 'react';
import './Topbar.css';

interface TopbarProps {
  presentationName: string;
}

function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default function Topbar(props: TopbarProps) {
  let randNum = randomInteger(1, 5);

  return (
    <div id='topbar' style={{backgroundImage: 'url(background-' + randNum + '.jpg)'}}>
      <h1>{props.presentationName}</h1>
      <button id='export-btn'>Экспорт</button>
    </div>
  );
}