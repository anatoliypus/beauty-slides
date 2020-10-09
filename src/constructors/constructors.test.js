const { Slide, Settings, App, Image, Text } = require('./constructors');

const settings = new Settings('800px', '600px');
const app = new App(settings);
console.dir(app);
