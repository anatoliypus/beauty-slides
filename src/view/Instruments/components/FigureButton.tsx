import React from 'react';
import styles from './FigureButton.module.css';

interface ButtonProps {
  imgUrl: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <div onClick={props.onClick} className={styles.instrumentsButton}>
      <img className={styles.instrumentsButton__img} src={props.imgUrl} />
    </div>
  )
}