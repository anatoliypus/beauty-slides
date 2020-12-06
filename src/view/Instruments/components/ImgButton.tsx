import React from 'react';
import styles from './ImgButton.module.css';

interface ButtonProps {
  imgUrl: string;
  onClick: () => void;
}

export default function ImgButton(props: ButtonProps) {
  return (
    <div onClick={props.onClick} className={styles.instrumentsButton}>
      <img className={styles.instrumentsButton__img} src={props.imgUrl} alt='feature icon' />
    </div>
  )
}