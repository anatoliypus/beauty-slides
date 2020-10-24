import React from 'react';
import './slideViewport.css';
import { SlideType } from '../../model/model';
import getObjects from './getObjects';

interface SlideViewportProps {
    slide: SlideType;
    slideWidth: string;
    slideHeight: string;
}

export default function SlideViewport(props: SlideViewportProps) {
    let slideStyles = {
        width: props.slideWidth,
        height: props.slideHeight,
    }
    let slideStyles2;
    if (props.slide.background) {
        slideStyles2 = {
        ...slideStyles,
        background: props.slide.background.indexOf('.') === -1 ? props.slide.background : 'url(' + props.slide.background + ')'
        }   
    }
    return (
        <div id="slide-viewport">
            <div
                id="slide"
                style={slideStyles2 ? slideStyles2 : slideStyles}
            >
                {getObjects(props.slide, 1, 1)}
            </div>
        </div>
    );
}
