import * as serviceWorker from './serviceWorker';
import constructors from './constructors/constructors';
import { init } from './dispatcher';
import { setSlideBg, addText, moveItem, addFigure, addImage } from './methods/methods';

const settings = constructors.createSettings('800px', '600px');
let app = constructors.createApp(settings);
// app = addText(app);
// app = moveItem(app, {id: app.slides[0].objects[0].id, x: 400, y: 500});
app = addFigure(app, 'rectangle');
app = moveItem(app, {id: app.slides[0].objects[0].id, x: 30, y: 400});
app = addImage(app, '/background-1.jpg');
// app = setSlideBg(app, '/background-1.jpg');

init(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
