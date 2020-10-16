import React from 'react';
import './figureButton.css';

interface ButtonProps {
  imgUrl: string;
  func: Function;
}

export default function Button(props: ButtonProps) {
  return (
    <div className="instruments-button">
      <img src={props.imgUrl} />
    </div>
  )
}