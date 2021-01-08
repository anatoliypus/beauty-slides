import React from 'react';
import styles from './SlideViewport.module.css';
import { AppType, SlideCollection } from '../../model/model';
import getObjects from '../SlideObjects/getObjects';
import { dispatch } from '../../dispatcher';
import { changeSelectedObject } from '../../methods/methods';
import { Context } from '../../dispatcher';
import { connect } from 'react-redux';

interface SlideViewportProps {
    slides: SlideCollection;
    selectedId: string | null;
    currSlideId: string | null;
}

function SlideViewport(props: SlideViewportProps) {
    let slide = props.slides.find(
        (slide) => slide.id === props.currSlideId
    );
    if (! slide) throw new Error();

    const settings = React.useContext(Context);
    let slideStyles = {
        width: settings.slideWidth + 'px',
        height: settings.slideHeight + 'px'
    };
    let slideStyles2;
    if (slide.background) {
        if (slide.background.indexOf('base64') === -1) {
            slideStyles2 = {
                ...slideStyles,
                backgroundColor: slide.background
            };
        } else {
            slideStyles2 = {
                ...slideStyles,
                backgroundImage: 'url(' + slide.background + ')',
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
                {getObjects(slide, 1, 1, props.selectedId)}
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppType): SlideViewportProps => {
    return {
        slides: state.slides,
        currSlideId: state.currSlideId,
        selectedId: state.choosedObject.id
    }
}

export default connect(mapStateToProps)(SlideViewport)