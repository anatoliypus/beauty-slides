import React from 'react';
import styles from './SlideCarousel.module.css';
import { AppType, SlideCollection } from '../../model/model';
import Miniature from './components/Miniature';
import useChangeSlideOrder from './components/useChangeSlideOrder';
import { Context } from '../../index';
import { connect } from 'react-redux';
import { changeSlideOrder } from '../../actions/actionsCreators';

interface SlideCarouselProps {
    slides: SlideCollection;
    currSlideId: string | null;
    changeSlideOrder: (slideId: string, afterId: string) => void;
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

    useChangeSlideOrder(miniaturesRefsArrRef, carouselRef, props.changeSlideOrder);

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

interface SlideCarouselOwnProps {
    slides: SlideCollection;
    currSlideId: string | null;
}

const mapStateToProps = (state: AppType): SlideCarouselOwnProps => {
    return {
        slides: state.slides,
        currSlideId: state.currSlideId
    }
}

const mapDispatchToProps = {
    changeSlideOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideCarousel)