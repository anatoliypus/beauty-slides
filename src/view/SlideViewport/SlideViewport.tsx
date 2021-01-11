import React from 'react';
import styles from './SlideViewport.module.css';
import { AppType, NodeType, SlideCollection } from '../../model/model';
import getObjects from '../SlideObjects/getObjects';
import {
    changeSelectedObject,
    changeSlide,
} from '../../actions/actionsCreators';
import { Context } from '../../index';
import { connect } from 'react-redux';

interface SlideViewportProps {
    slides: SlideCollection;
    selectedId: string | null;
    currSlideId: string | null;
    changeSelectedObject: (id: string | null, type: NodeType | null) => void;
    changeSlide: (id: string) => void;
}

function SlideViewport(props: SlideViewportProps) {
    let slide = props.slides.find((slide) => slide.id === props.currSlideId);
    if (!slide) {
        const newId = props.slides[0].id;
        props.changeSlide(newId);
        slide = props.slides.find((slide) => slide.id === newId);
        if (!slide) throw new Error();
    }

    const settings = React.useContext(Context);
    let slideStyles = {
        width: settings.slideWidth + 'px',
        height: settings.slideHeight + 'px',
    };
    let slideStyles2;
    if (slide.background) {
        if (slide.background.indexOf('base64') === -1) {
            slideStyles2 = {
                ...slideStyles,
                backgroundColor: slide.background,
            };
        } else {
            slideStyles2 = {
                ...slideStyles,
                backgroundImage: 'url(' + slide.background + ')',
                backgroundSize: 'cover',
            };
        }
    }
    return (
        <div
            className={styles.slideViewport}
            style={{ height: settings.slideHeight + 'px' }}
        >
            <div
                className={styles.slide}
                style={slideStyles2 ? slideStyles2 : slideStyles}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    if (!event.isDefaultPrevented()) {
                        props.changeSelectedObject(null, null);
                    }
                }}
            >
                {getObjects(slide, 1, 1, props.selectedId, props.changeSelectedObject)}
            </div>
        </div>
    );
}

interface SlideViewportOwnProps {
    slides: SlideCollection;
    selectedId: string | null;
    currSlideId: string | null;
}

const mapStateToProps = (state: AppType): SlideViewportOwnProps => {
    return {
        slides: state.slides,
        currSlideId: state.currSlideId,
        selectedId: state.choosedObject.id,
    };
};

const mapDispatchToProps = {
    changeSelectedObject,
    changeSlide
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewport);
