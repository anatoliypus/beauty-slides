import React from 'react';
import './slideViewport.css';
import { SlideType } from '../../model/model';

interface SlideViewportProps {
  slide: SlideType | undefined;
  slideWidth: string;
  slideHeight: string;
}

export default function SlideViewport(props: SlideViewportProps) {
  return (
    <div id="slide-viewport">
      <div id='slide' style={{width: props.slideWidth, height: props.slideHeight}}></div>  
    </div>
  );
}