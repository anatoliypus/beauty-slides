import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';
import WebFont from 'webfontloader';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createStore, Store } from 'redux';
import presentationReducers from './reducers/presentationReducers';
import { AppType } from './model/model';

export const fonts = ['JetBrains Mono', 'Oswald', 'Merriweather', 'Open Sans', 'Roboto', 'Montserrat', 'Playfair Display', 'Lora', 'PT Serif', 'Russo One', 'Lobster', 'Pacifico', 'Amatic SC', 'Caveat', 'Yeseva One'].sort();

WebFont.load({
    google: {
        families: fonts,
    },
});

export let store: Store<AppType>;

let savedApp = window.localStorage.getItem('app');
if (savedApp) store = createStore(presentationReducers, JSON.parse(savedApp));
else store = createStore(presentationReducers);

const settings = constructors.createSettings();
export const Context = React.createContext(settings);

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={settings}>
            <App />
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
