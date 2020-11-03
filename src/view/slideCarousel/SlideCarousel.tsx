import React from 'react';
import styles from './SlideCarousel.module.css';
import { SlideType } from '../../model/model';
import getObjects from '../SlideViewport/getObjects';

interface SlideCarouselProps {
    slides: Array<SlideType>;
    currSlideId: string | null;
}

export default function SlideCarousel(props: SlideCarouselProps) {
    return (
        <div className={styles.slideCarousel}>
            {props.slides.map((slide, index) => {
                let miniatureStyles = {};
                if (slide.background) miniatureStyles = {
                    background: slide.background.indexOf('.') === -1 ? slide.background : 'url(' + slide.background + ')'
                }
                return (
                <div className={styles.slideCarouselItem} key={slide.id}>
                    <p>{index + 1}.</p>
                    <div
                        style={miniatureStyles}
                        className={
                            props.currSlideId === slide.id
                                ? `${styles.slideMiniature} ${styles.activeMiniature}`
                                : styles.slideMiniature
                        }
                    >
                        {getObjects(slide, 4, 4)}
                    </div>
                </div>
            )})}
        </div>
    );
}
