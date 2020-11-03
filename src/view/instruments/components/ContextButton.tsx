import React from 'react';
import styles from './ContextButton.module.css';

interface ComponentButtonProps {
  heading: string;
}

export default function ContextButton(props: ComponentButtonProps) {
  return (
    <div className={styles.contextBtn}>
      <p>{props.heading}</p>
    </div>
  )
}