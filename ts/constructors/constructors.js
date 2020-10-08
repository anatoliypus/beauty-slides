"use strict";
exports.__esModule = true;
exports.Text = exports.Image = exports.App = exports.Settings = exports.Slide = void 0;
function Slide() {
    this.id = Date.now().toString();
    this.objects = [];
    this.background = null;
}
exports.Slide = Slide;
function Settings(slideWidth, slideHeight) {
    this.slideWidth = slideWidth;
    this.slideHeight = slideHeight;
}
exports.Settings = Settings;
function App(settings) {
    this.slides = [new Slide()];
    this.currSlideId = this.slides[0].id;
    this.settings = settings;
    this.choosedObjectId = null;
}
exports.App = App;
function Image(path, width, height, cords) {
    this.id = Date.now().toString();
    this.type = 'img';
    this.path = path;
    this.width = width;
    this.height = height;
    this.positionTopLeft = cords;
}
exports.Image = Image;
function Text(width, height, cords) {
    this.id = Date.now().toString();
    this.type = 'text';
    this.width = width;
    this.height = height;
    this.positionTopLeft = cords;
}
exports.Text = Text;
