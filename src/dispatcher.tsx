import React from 'react';
import { AppType, History } from './model/model';
import ReactDOM from 'react-dom';
import App from './App';
import { cloneApp } from './methods/secondaryMethods';

let globalState: AppType | null = null;
const undoStack: History = [];
const redoStack: History = [];

function dispatch(fn: Function, payload: object | string | null = null): void {
    const newState = fn(globalState, payload);
    if (newState != globalState) {
        if (globalState) undoStack.push(cloneApp(globalState));
        globalState = fn(globalState, payload);
        if (newState != null) renderApp(newState);
        else throw new Error('Trying to dispatch with empty state of app!');
    }
}

function init(state: AppType): void {
    globalState = state;
    renderApp(state);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
            if (e.shiftKey) redo();
            else undo();
        }
    });
}

function undo(): void {
    if (undoStack.length && globalState) {
        redoStack.push(cloneApp(globalState));
        globalState = undoStack[undoStack.length - 1];
        undoStack.splice(undoStack.length - 1);
        renderApp(globalState);
    }
}

function redo(): void {
    if (redoStack.length && globalState) {
        undoStack.push(cloneApp(globalState));
        globalState = redoStack[redoStack.length - 1];
        redoStack.splice(redoStack.length - 1);
        renderApp(globalState);
    }
}

function renderApp(state: AppType): void {
    ReactDOM.render(
        <React.StrictMode>
            <App app={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export { init, dispatch, undo, redo };
