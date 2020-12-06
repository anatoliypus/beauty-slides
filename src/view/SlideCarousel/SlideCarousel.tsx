import React from 'react';
import styles from './SlideCarousel.module.css';
import { SlideType } from '../../model/model';
import Miniature from './Miniature';
import useChangeSlideOrder from './useChangeSlideOrder';

interface SlideCarouselProps {
    slides: Array<SlideType>;
    currSlideId: string | null;
}

export interface miniatureRefObj {
    ref: React.RefObject<HTMLElement>;
    id: string;
}

export default function SlideCarousel(props: SlideCarouselProps) {
    const miniaturesRefsArr: Array<miniatureRefObj> = [];
    const miniaturesRefsArrRef = React.useRef(miniaturesRefsArr);

    useChangeSlideOrder(miniaturesRefsArrRef);

    return (
        <div className={styles.slideCarousel}>
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
                const miniatureClassName =
                    props.currSlideId === slide.id
                        ? `${styles.slideMiniature} ${styles.activeMiniature}`
                        : styles.slideMiniature;
                return (
                    <Miniature
                        refsArr={miniaturesRefsArrRef}
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
