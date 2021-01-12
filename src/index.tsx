import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createStore, Store } from 'redux';
import presentationReducers from './reducers/presentationReducers';
import { AppType } from './model/model';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

export const fonts = ['JetBrains Mono', 'Oswald', 'Merriweather', 'Open Sans', 'Roboto', 'Montserrat', 'Playfair Display', 'Lora', 'PT Serif', 'Russo One', 'Lobster', 'Pacifico', 'Amatic SC', 'Caveat', 'Yeseva One'].sort();
WebFont.load({
    google: {
        families: fonts,
    },
});

export const paletteSampleColors = [
    '#dbeb33',
    '#3386eb',
    '#ff4d4d',
    '#ff4daf',
    '#b54dff',
    '#66d6ff',
    '#47ffce',
    '#47ff7b',
    '#e0ff47',
    '#ffbf47',
    '#ff6947',
    '#000000',
    '#ffffff',
    '#F0F8FF',
    '#DEB887',
    '#C71585',
    '#B0C4DE',
    '#90EE90',
    '#0000CD',
    '#40E0D0',
    '#4B0082',
    '#708090',
    '#808000',
    '#9932CC',
    '#B22222',
    '#ADFF2F',
    '#B8860B',
    '#FF0000',
    '#FF00FF',
    '#FF1493',
    '#FFA07A',
    '#FFB6C1',
    '#FFC0CB',
    '#FFD700',
];

export const defaultFigureImgSize = 200;
export const defaultFigureStrokeWidth = 2;

export const defaultTextBlockWidth = 300;
export const defaultTextBlockHeight = 50;
export const defaultFontSize = 35;
export const defaultFontFamily = 'Oswald';
export const defaultTextWeight = 400;
export const defaultTextData = 'Введите текст';

export const slideWidth = 1000;
export const slideHeight = 700;

export const objectsInitialX = 30;
export const objectsInitialY = 30;

export let store: Store<AppType>;

const settings = constructors.createSettings();
export const Context = React.createContext(settings);

export function init(state: AppType | undefined = undefined) {
    if (state) {
        store = createStore(presentationReducers, state);
        window.localStorage.setItem('app', JSON.stringify(state));
    } else {
        let savedApp = window.localStorage.getItem('app');
        if (savedApp) store = createStore(presentationReducers, JSON.parse(savedApp));
        else store = createStore(presentationReducers);
    }
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Context.Provider value={settings}>
                    <App />
                </Context.Provider>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
