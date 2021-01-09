import React from 'react';
import Topbar from './view/Topbar/Topbar';
import SlideCarousel from './view/SlideCarousel/SlideCarousel';
import SlideViewport from './view/SlideViewport/SlideViewport';
import Footer from './view/Footer/Footer';
import { AppType } from './model/model';
import styles from './App.module.css';
import * as hotKeyMethods from './methods/hotKeyMethods';
import { connect } from 'react-redux';

interface AppProps {
    name: string;
}

function App(props: AppProps) {
    React.useEffect(() => {
        document.title = props.name;
    });

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
            <Topbar />
            <div className={styles.workingArea}>
                <SlideCarousel />
                <SlideViewport />
            </div>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state: AppType): AppProps => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps)(App)
