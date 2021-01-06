import React from 'react';
import styles from './SlideViewport.module.css';
import { SlideType } from '../../model/model';
import getObjects from '../slideObjects/getObjects';
import { dispatch } from '../../dispatcher';
import { changeSelectedObject } from '../../methods/methods';
import { Context } from '../../dispatcher';

interface SlideViewportProps {
    slide: SlideType;
    selectedId: string | null; 
}

export default function SlideViewport(props: SlideViewportProps) {
    const settings = React.useContext(Context);
    let slideStyles = {
        width: settings.slideWidth + 'px',
        height: settings.slideHeight + 'px'
    };
    let slideStyles2;
    if (props.slide.background) {
        if (props.slide.background.indexOf('base64') === -1) {
            slideStyles2 = {
                ...slideStyles,
                backgroundColor: props.slide.background
            };
        } else {
            slideStyles2 = {
                ...slideStyles,
                backgroundImage: 'url(' + props.slide.background + ')',
                backgroundSize: 'cover'
            };
        }
    }
    return (
        <div className={styles.slideViewport} style={{height: settings.slideHeight + 'px'}}>
            <div
                className={styles.slide}
                style={slideStyles2 ? slideStyles2 : slideStyles}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    if (!event.isDefaultPrevented()) {
                        dispatch(changeSelectedObject, '');
                    }
                }}
            >
                {getObjects(props.slide, 1, 1, props.selectedId)}
            </div>
        </div>
    );
}
