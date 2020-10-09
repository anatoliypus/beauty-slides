"use strict";
exports.__esModule = true;
exports.createText = exports.createImage = exports.createApp = exports.createSettings = exports.createSlide = void 0;
function createSlide() {
    return {
        id: Date.now().toString(),
        objects: [],
        background: null
    };
}
exports.createSlide = createSlide;
function createSettings(slideWidth, slideHeight) {
    return {
        slideWidth: slideWidth,
        slideHeight: slideHeight
    };
}
exports.createSettings = createSettings;
function createApp(settings) {
    var slide = createSlide();
    return {
        name: 'Название презентации',
        slides: [slide],
        currSlideId: slide.id,
        settings: settings,
        choosedObjectId: null
    };
}
exports.createApp = createApp;
function createImage(path, width, height, cords) {
    return {
        id: Date.now().toString(),
        type: 'img',
        path: path,
        width: width,
        height: height,
        positionTopLeft: cords
    };
}
exports.createImage = createImage;
function createText(width, height, cords) {
    return {
        id: Date.now().toString(),
        type: 'text',
        width: width,
        height: height,
        positionTopLeft: cords,
        fontStyle: 'unset',
        fontDecoration: 'unset',
        fontFamily: 'Open Sans',
        fontSize: '15px',
        color: '#000',
        data: '',
        fontWeight: 400
    };
}
exports.createText = createText;
