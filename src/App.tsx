import React from 'react';
import Topbar from './view/Topbar/Topbar';
import SlideCarousel from './view/SlideCarousel/SlideCarousel';
import SlideViewport from './view/SlideViewport/SlideViewport';
import Footer from './view/Footer/Footer';
import { AppType } from './model/model';
import styles from './App.module.css';
import * as hotKeyMethods from './methods/hotKeyMethods';

interface AppProps {
    app: AppType;
}

export default function App(props: AppProps) {
    React.useEffect(() => {
        document.title = props.app.name;
    });
    let slide = props.app.slides.find(
        (slide) => slide.id === props.app.currSlideId
    );
    if (! slide) throw new Error();

    React.useEffect(() => {
        window.addEventListener('keydown', hotKeyMethods.copyHotKey);
        window.addEventListener('keydown', hotKeyMethods.pasteHotKey);
        window.addEventListener('keydown', hotKeyMethods.deleteHotKey);
        window.addEventListener('keydown', hotKeyMethods.undoHotKey);
        window.addEventListener('keydown', hotKeyMethods.deleteSlideHotKey);
        return () => {
            window.removeEventListener('keydown', hotKeyMethods.copyHotKey);
            window.removeEventListener('keydown', hotKeyMethods.pasteHotKey);
            window.removeEventListener('keydown', hotKeyMethods.deleteHotKey);
            window.removeEventListener('keydown', hotKeyMethods.undoHotKey);
            window.removeEventListener('keydown', hotKeyMethods.deleteSlideHotKey);
        }
    });

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
                    selectedId={props.app.choosedObject.id}
                />
            </div>
            <Footer />
        </div>
    );
}
