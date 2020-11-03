import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';
import { addText, moveItem, addFigure, addImage, setSlideBg } from './methods/methods';

const settings = constructors.createSettings('800px', '600px');
export let app = constructors.createApp(settings);
app = addText(app);
app = moveItem(app, {id: app.slides[0].objects[0].id, x: 400, y: 400});
app = addFigure(app, 'circle');
app = moveItem(app, {id: app.slides[0].objects[1].id, x: 300, y: 300});
app = addImage(app, '/background-1.jpg');
app = setSlideBg(app, 'deepskyblue');

ReactDOM.render(
    <React.StrictMode>
        <App app={app} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
