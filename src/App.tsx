import React from 'react';
import Topbar from './view/Topbar/Topbar';
import SlideCarousel from './view/SlideCarousel/SlideCarousel';
import SlideViewport from './view/SlideViewport/SlideViewport';
import Footer from './view/Footer/Footer';
import { AppType } from './model/model';
import styles from './App.module.css';
import useHotKeys from './methods/hotKeyMethods';
import { connect } from 'react-redux';
import {
    deleteSlideObject,
    deleteSlide,
    redo,
    undo,
    copyObject,
    pasteObject,
    cutSlideNode
} from './actions/actionsCreators';

interface AppProps {
    name: string;
    deleteSlideObject: () => void;
    deleteSlide: () => void;
    cutSlideNode: () => void;
    redo: () => void;
    undo: () => void;
    copyObject: () => void;
    pasteObject: () => void;
}

function App(props: AppProps) {
    useHotKeys(
        props.deleteSlideObject,
        props.copyObject,
        props.pasteObject,
        props.cutSlideNode,
        props.deleteSlide,
        props.redo,
        props.undo
    );

    React.useEffect(() => {
        document.title = props.name;
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

const mapDispatchToProps = {
    deleteSlideObject,
    deleteSlide,
    redo,
    undo,
    copyObject,
    pasteObject,
    cutSlideNode
};

interface AppOwnProps {
    name: string;
}

const mapStateToProps = (state: AppType): AppOwnProps => {
    return {
        name: state.name,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
