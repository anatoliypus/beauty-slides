import React from 'react';
import { AppType } from './model/model';
import ReactDOM from 'react-dom';
import App from './App';

let globalState: AppType | null = null;

function dispatch(fn: Function, payload: object | string | null = null): void {
    globalState = fn(globalState, payload);
    if (globalState != null) renderApp(globalState);
    else throw new Error('Trying to dispatch with empty state of app!');
}

function init(state: AppType): void {
    globalState = state;
    renderApp(state);
}

function renderApp(state: AppType): void {
    ReactDOM.render(
        <React.StrictMode>
            <App app={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export { init, dispatch }