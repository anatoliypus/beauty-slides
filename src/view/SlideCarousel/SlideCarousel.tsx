import React from 'react';
import styles from './SlideCarousel.module.css';
import { AppType, SlideCollection, SlideType } from '../../model/model';
import Miniature from './components/Miniature';
import useChangeSlideOrder from './components/useChangeSlideOrder';
import { Context } from '../../dispatcher';
import { connect } from 'react-redux';

interface SlideCarouselProps {
    slides: SlideCollection;
    currSlideId: string | null;
}

export interface miniatureRefObj {
    ref: React.RefObject<HTMLElement>;
    id: string;
}

function SlideCarousel(props: SlideCarouselProps) {
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

const mapStateToProps = (state: AppType): SlideCarouselProps => {
    return {
        slides: state.slides,
        currSlideId: state.currSlideId
    }
}

export default connect(mapStateToProps)(SlideCarousel)