import React from 'react';
import './slideCarousel.css';
import { SlideType } from '../../model/model';
import getObjects from '../SlideViewport/getObjects';

interface SlideCarouselProps {
    slides: Array<SlideType>;
    currSlideId: string | null;
}

export default function SlideCarousel(props: SlideCarouselProps) {
    return (
        <div id="slide-carousel">
            {props.slides.map((slide, index) => {
                let miniatureStyles = {};
                if (slide.background) miniatureStyles = {
                    background: slide.background.indexOf('.') === -1 ? slide.background : 'url(' + slide.background + ')'
                }
                return (
                <div className="slide-carousel-item" key={slide.id}>
                    <p>{index + 1}.</p>
                    <div
                        style={miniatureStyles}
                        className={
                            props.currSlideId === slide.id
                                ? 'slide-miniature active-miniature'
                                : 'slide-miniature'
                        }
                    >
                        {getObjects(slide, 4, 4)}
                    </div>
                </div>
            )})}
        </div>
    );
}
