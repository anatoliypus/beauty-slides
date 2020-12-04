import React from 'react';
import styles from './SlideCarousel.module.css';
import { SlideType } from '../../model/model';
import Miniature from './Miniature';

interface SlideCarouselProps {
    slides: Array<SlideType>;
    currSlideId: string | null;
}

export default function SlideCarousel(props: SlideCarouselProps) {
    return (
        <div className={styles.slideCarousel}>
            {props.slides.map((slide, index) => {
                let miniatureStyles = {};
                if (slide.background)
                    miniatureStyles = {
                        background:
                            slide.background.indexOf('base64') === -1
                                ? slide.background
                                : 'url(' + slide.background + ')',
                        backgroundSize: 'cover'
                    };
                const miniatureClassName =
                    props.currSlideId === slide.id
                        ? `${styles.slideMiniature} ${styles.activeMiniature}`
                        : styles.slideMiniature;
                return (
                    <Miniature
                        key={slide.id}
                        index={index + 1}
                        inlineStyle={miniatureStyles}
                        miniatureClassName={miniatureClassName}
                        slide={slide}
                    />
                );
            })}
        </div>
    );
}
