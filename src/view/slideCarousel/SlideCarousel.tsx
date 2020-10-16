import React from 'react';
import './slideCarousel.css';
import { SlideType } from '../../model/model';

interface SlideCarouselProps {
  slides: Array<SlideType>;
}

export default function SlideCarousel(props: SlideCarouselProps) {
  return (
    <div id='slide-carousel'>
      {props.slides.map((slide, index) =>
        <div className='slide-carousel-item'>
          <p>{index + 1}.</p>
          <div className='slide-miniature' key={slide.id}></div>
        </div>
      )}
    </div>
  )
}