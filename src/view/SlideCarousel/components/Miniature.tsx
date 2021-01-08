import React from 'react';
import styles from '../SlideCarousel.module.css';
import { AppType, SlideType } from '../../../model/model';
import getObjects from '../../SlideObjects/getObjects';
import { changeSlide } from '../../../actions/actionsCreators';
import { Context } from '../../../index';
import { connect } from 'react-redux';

interface MiniatureProps {
    index: number;
    inlineStyle: React.CSSProperties;
    slide: SlideType;
    refsArr: React.RefObject<Array<object>>;
    choosed: boolean;
    changeSlide: () => void;
}
 
function Miniature(props: MiniatureProps) {
    const settings = React.useContext(Context);

    const miniatureRef = React.useRef<HTMLDivElement>(null);
    const slideCarouselItemRef = React.useRef(null);

    const [proportions, changeProportions] = React.useState({kWidth: 1, kHeight: 1});

    function setProportions() {
        if (miniatureRef.current) {
            const miniatureWidth = miniatureRef.current.getBoundingClientRect().width;
            console.log(miniatureWidth);
            const miniatureHeight = miniatureWidth / (settings.slideWidth / settings.slideHeight);
            miniatureRef.current.style.height = miniatureHeight + 'px';
            const kWidth = miniatureWidth / settings.slideWidth;
            const kHeight = miniatureHeight / settings.slideHeight;
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
        changeSlide(props.slide.id)
    }

    React.useEffect(() => {
        if (props.refsArr.current) props.refsArr.current.push({ref: slideCarouselItemRef, id: props.slide.id});
    }, []);

    return (
        <div ref={slideCarouselItemRef} onClick={miniatureOnClick} className={styles.slideCarouselItem} key={props.slide.id}>
            <p style={props.choosed ? {color: '#ce458c'} : {}}>{props.index}.</p>
            <div
                ref={miniatureRef}
                style={props.inlineStyle}
                className={styles.slideMiniature}
            >
                {getObjects(props.slide, proportions.kWidth, proportions.kHeight, null)}
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    changeSlide
}

const mapStateToProps = (state: AppType, ownProps: MiniatureProps) => {
    return ownProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Miniature)
