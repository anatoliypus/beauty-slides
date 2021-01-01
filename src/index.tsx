import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';
import { init } from './dispatcher';
import WebFont from 'webfontloader';

export const fonts = ['JetBrains Mono', 'Oswald', 'Merriweather', 'Open Sans', 'Roboto', 'Montserrat', 'Playfair Display', 'Lora', 'PT Serif', 'Russo One', 'Lobster', 'Pacifico', 'Amatic SC', 'Caveat', 'Yeseva One'].sort();

WebFont.load({
    google: {
        families: fonts,
    },
});

const settings = constructors.createSettings();
let app = constructors.createApp(settings);
// app = addImage(app, '/background-1.jpg');

let savedApp = window.localStorage.getItem('app');
if (savedApp) init(JSON.parse(savedApp))
else init(app);
// init(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
