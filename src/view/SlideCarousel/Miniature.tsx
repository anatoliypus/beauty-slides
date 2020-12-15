import React from 'react';
import styles from './SlideCarousel.module.css';
import { SlideType } from '../../model/model';
import getObjects from '../SlideViewport/getObjects';
import { dispatch } from '../../dispatcher';
import { changeSlide } from '../../methods/methods';

interface MiniatureProps {
    index: number;
    inlineStyle: React.CSSProperties;
    miniatureClassName: string;
    slide: SlideType;
    refsArr: React.RefObject<Array<object>>;
}
 
export default function Miniature(props: MiniatureProps) {

    const miniatureRef = React.useRef<HTMLDivElement>(null);
    const slideCarouselItemRef = React.useRef(null);

    const [proportions, changeProportions] = React.useState({kWidth: 1, kHeight: 1});

    function setProportions() {
        if (miniatureRef.current) {
            const miniatureWidth = miniatureRef.current.getBoundingClientRect().width;
            const miniatureHeight = miniatureRef.current.getBoundingClientRect().height;
            const kWidth = miniatureWidth / 1032;
            const kHeight = miniatureHeight / 632;
            changeProportions({kWidth: 1 / kWidth, kHeight: 1 / kHeight});
        }
    }

    React.useEffect(() => {
        setProportions();
        window.addEventListener('resize', setProportions);
        return () => {
            window.removeEventListener('resize', setProportions);
        }
    }, []);

    function miniatureOnClick() {
        dispatch(changeSlide, props.slide.id)
    }

    React.useEffect(() => {
        if (props.refsArr.current) props.refsArr.current.push({ref: slideCarouselItemRef, id: props.slide.id});
    }, []);

    return (
        <div ref={slideCarouselItemRef} onClick={miniatureOnClick} className={styles.slideCarouselItem} key={props.slide.id}>
            <div
                ref={miniatureRef}
                style={props.inlineStyle}
                className={props.miniatureClassName}
            >
                {getObjects(props.slide, proportions.kWidth, proportions.kHeight, null)}
            </div>
        </div>
    );
}
