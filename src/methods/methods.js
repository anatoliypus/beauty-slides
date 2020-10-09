"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.deleteSlide = exports.deleteSlideObject = exports.moveItem = exports.setSlideBg = exports.changeTextSize = exports.toggleUnderlinedText = exports.toggleItalicText = exports.toggleBoldText = exports.resizeImage = exports.changeSlide = void 0;
function changeSlide(app, slideId) {
    return Object.freeze(__assign(__assign({}, app), { currSlideId: slideId }));
}
exports.changeSlide = changeSlide;
function resizeImage(app, id, width, height) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id && newObj.type === 'img') {
            newObj.width = width;
            newObj.height = height;
        }
        return newObj;
    });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) }));
}
exports.resizeImage = resizeImage;
function toggleBoldText(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id && newObj.type === 'text') {
            newObj.fontWeight = newObj.fontWeight === 400 ? 700 : 400;
        }
        return newObj;
    });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) }));
}
exports.toggleBoldText = toggleBoldText;
function toggleItalicText(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id && newObj.type === 'text') {
            newObj.fontStyle = newObj.fontStyle === 'italic' ? 'unset' : 'italic';
        }
        return newObj;
    });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) }));
}
exports.toggleItalicText = toggleItalicText;
function toggleUnderlinedText(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id && newObj.type === 'text') {
            newObj.fontDecoration =
                newObj.fontDecoration === 'underline' ? 'unset' : 'underline';
        }
        return newObj;
    });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) }));
}
exports.toggleUnderlinedText = toggleUnderlinedText;
function changeTextSize(app, id, size) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id && newObj.type === 'text') {
            newObj.fontSize = size;
        }
        return newObj;
    });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) }));
}
exports.changeTextSize = changeTextSize;
function setSlideBg(app, id, background) {
    var slide = app.slides.find(function (slideToFind) { return slideToFind.id === id; });
    var newSlide = slide;
    newSlide.background = background;
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (obj) {
            if (obj.id === newSlide.id)
                return newSlide;
            return obj;
        }) }));
}
exports.setSlideBg = setSlideBg;
function moveItem(app, id, x, y) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id) {
            newObj.positionTopLeft.x = x;
            newObj.positionTopLeft.y = y;
        }
        return newObj;
    });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) }));
}
exports.moveItem = moveItem;
function deleteSlideObject(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.filter(function (obj) { return obj.id !== id; });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.map(function (obj) {
            if (obj.id === id)
                return newSlide;
            return obj;
        }) }));
}
exports.deleteSlideObject = deleteSlideObject;
function deleteSlide(app, id) {
    var slide = app.slides.find(function (slideToFind) { return slideToFind.id === id; });
    return Object.freeze(__assign(__assign({}, app), { slides: app.slides.filter(function (obj) { return obj !== slide; }) }));
}
exports.deleteSlide = deleteSlide;
