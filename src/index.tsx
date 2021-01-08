import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';
import WebFont from 'webfontloader';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createStore, Store } from 'redux';
import presentationReducers from './reducers/presentationReducers';
import { AppType } from './model/model';
import { Provider } from 'react-redux';

export const fonts = ['JetBrains Mono', 'Oswald', 'Merriweather', 'Open Sans', 'Roboto', 'Montserrat', 'Playfair Display', 'Lora', 'PT Serif', 'Russo One', 'Lobster', 'Pacifico', 'Amatic SC', 'Caveat', 'Yeseva One'].sort();

WebFont.load({
    google: {
        families: fonts,
    },
});

export let store: Store<AppType>;

const settings = constructors.createSettings();
export const Context = React.createContext(settings);

export function init(state: AppType | undefined = undefined) {
    if (state) {
        store = createStore(presentationReducers, state);
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
