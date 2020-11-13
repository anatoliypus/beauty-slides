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
}

 
export default function Miniature(props: MiniatureProps) {

    const miniatureRef = React.useRef<HTMLDivElement>(null);

    const [proportions, changeProportions] = React.useState({kWidth: 1, kHeight: 1});

    function setProportions() {
        if (miniatureRef.current) {
            const miniatureWidth = miniatureRef.current.getBoundingClientRect().width;
            const miniatureHeight = miniatureRef.current.getBoundingClientRect().height;
            const kWidth = miniatureWidth / 802;
            const kHeight = miniatureHeight / 602;
            changeProportions({kWidth: 1 / kWidth, kHeight: 1 / kHeight});
        }
    }

    React.useEffect(() => {
        setProportions();
        window.addEventListener('resize', setProportions)
    }, []);

    function miniatureOnClick() {
        dispatch(changeSlide, props.slide.id)
    }
    return (
        <div onClick={miniatureOnClick} className={styles.slideCarouselItem} key={props.slide.id}>
            <p>{props.index}.</p>
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
