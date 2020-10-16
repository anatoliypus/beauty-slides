import React from 'react';
import './figureButton.css';

interface ButtonProps {
  imgUrl: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <div onClick={props.onClick} className="instruments-button">
      <img src={props.imgUrl} />
    </div>
  )
}