import React from 'react';
import styles from './SlideCarousel.module.css';
import { SlideType } from '../../model/model';
import Miniature from './Miniature';
import useChangeSlideOrder from './useChangeSlideOrder';
import { Context } from '../../dispatcher';

interface SlideCarouselProps {
    slides: Array<SlideType>;
    currSlideId: string | null;
}

export interface miniatureRefObj {
    ref: React.RefObject<HTMLElement>;
    id: string;
}

export default function SlideCarousel(props: SlideCarouselProps) {
    const settings = React.useContext(Context);
    const miniaturesRefsArr: Array<miniatureRefObj> = [];
    const miniaturesRefsArrRef = React.useRef(miniaturesRefsArr);
    const carouselRef = React.useRef<HTMLDivElement>(null);

    useChangeSlideOrder(miniaturesRefsArrRef, carouselRef);

    return (
        <div className={styles.slideCarousel} ref={carouselRef} style={{height: settings.slideHeight}}>
            {props.slides.map((slide, index) => {
                let miniatureStyles = {};
                if (slide.background) {
                    if (slide.background.indexOf('base64') === -1) {
                        miniatureStyles = {
                            backgroundColor: slide.background,
                        };
                    } else {
                        miniatureStyles = {
                            backgroundImage:
                                'url(' + slide.background + ')',
                            backgroundSize: 'cover',
                        };
                    }
                }
                return (
                    <Miniature
                        refsArr={miniaturesRefsArrRef}
                        key={slide.id}
                        index={index + 1}
                        inlineStyle={miniatureStyles}
                        slide={slide}
                        choosed={slide.id === props.currSlideId}
                    />
                );
            })}
        </div>
    );
}
