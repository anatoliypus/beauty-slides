import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';

const settings = constructors.createSettings('800px', '600px');
export const app = constructors.createApp(settings);

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
