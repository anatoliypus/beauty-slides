import React from 'react';
import './slideViewport.css';
import { SlideType } from '../../model/model';
import getObjects from './getObjects';

interface SlideViewportProps {
    slide: SlideType | undefined;
    slideWidth: string;
    slideHeight: string;
}

export default function SlideViewport(props: SlideViewportProps) {
    let slideStyles = {
        width: props.slideWidth,
        height: props.slideHeight,
    } as React.CSSProperties;
    if (!props.slide)
        return (
            <div id="slide-viewport">
                <div
                    id="slide"
                    style={slideStyles}
                ></div>
            </div>
        );
    if (props.slide.background) {
        slideStyles = {
            ...slideStyles,
            background: props.slide.background.indexOf('.') === -1 ? props.slide.background : 'url(' + props.slide.background + ')'
        } as React.CSSProperties;
    }
    return (
        <div id="slide-viewport">
            <div
                id="slide"
                style={slideStyles}
            >
                {getObjects(props.slide, 1, 1)}
            </div>
        </div>
    );
}
