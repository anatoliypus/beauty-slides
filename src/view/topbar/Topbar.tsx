import React from 'react';
import './Topbar.css';

interface TopbarProps {
  presentationName: string;
}

export default function Topbar(props: TopbarProps) {
  return (
    <div id='topbar'>
      <h1>{props.presentationName}</h1>
      <button id='export-btn'>Экспорт</button>
    </div>
  );
}