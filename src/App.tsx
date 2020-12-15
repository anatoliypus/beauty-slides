import React, { useEffect } from 'react';
import Topbar from './view/Topbar/Topbar';
import SlideCarousel from './view/SlideCarousel/SlideCarousel';
import SlideViewport from './view/SlideViewport/SlideViewport';
import Footer from './view/Footer/Footer';
import { AppType } from './model/model';
import styles from './App.module.css';
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
            <Topbar app={props.app} />
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
