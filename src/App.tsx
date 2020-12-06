import React, { useEffect } from 'react';
import Topbar from './view/Topbar/Topbar';
import SlideCarousel from './view/SlideCarousel/SlideCarousel';
import SlideViewport from './view/SlideViewport/SlideViewport';
import Instruments from './view/Instruments/Instruments';
import Footer from './view/Footer/Footer';
import { AppType } from './model/model';
import styles from './App.module.css';
import { dispatch } from './dispatcher';
import constructors from './constructors/constructors';
import { addSlide } from './methods/methods';

interface AppProps {
    app: AppType;
}

export default function App(props: AppProps) {
    useEffect(() => {
        document.title = props.app.name;
    });
    let slide = props.app.slides.find(
        (slide) => slide.id === props.app.currSlideId
    );
    if (! slide) throw new Error();
    

    return (
        <div className={styles.app}>
            <Topbar presentationName={props.app.name} />
            <Instruments app={props.app} />
            <div className={styles.workingArea}>
                <SlideCarousel
                    currSlideId={props.app.currSlideId}
                    slides={props.app.slides}
                />
                <SlideViewport
                    slide={slide}
                    slideWidth={props.app.settings.slideWidth}
                    slideHeight={props.app.settings.slideHeight}
                    selectedId={props.app.choosedObjectId}
                />
            </div>
            <Footer />
        </div>
    );
}
