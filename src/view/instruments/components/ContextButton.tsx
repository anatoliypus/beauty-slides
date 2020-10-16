import React from 'react';
import './contextButton.css';

interface ComponentButtonProps {
  heading: string;
}

export default function ContextButton(props: ComponentButtonProps) {
  return (
    <div className="context-btn">
      <p>{props.heading}</p>
    </div>
  )
}