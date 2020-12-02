import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';
import { init } from './dispatcher';
import { addImage } from './methods/methods';

const settings = constructors.createSettings('1000px', '600px');
let app = constructors.createApp(settings);
// app = addImage(app, '/background-1.jpg');

let savedApp = window.localStorage.getItem('app');
if (savedApp) init(JSON.parse(savedApp))
else init(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
