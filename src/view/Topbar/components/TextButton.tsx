import React from 'react';
import styles from './TextButton.module.css';

interface ButtonProps {
  heading: string;
  onClick: () => void;
}

export default function TextButton(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={styles.textButton}>
        {props.heading}
    </button>
  )
}