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
    function miniatureOnClick() {
        console.log(1);
        dispatch(changeSlide, props.slide.id)
    }
    return (
        <div onClick={miniatureOnClick} className={styles.slideCarouselItem} key={props.slide.id}>
            <p>{props.index}.</p>
            <div
                style={props.inlineStyle}
                className={props.miniatureClassName}
            >
                {getObjects(props.slide, 4, 4)}
            </div>
        </div>
    );
}
