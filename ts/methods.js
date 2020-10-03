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
function changeSlide(app, slidePos) {
    return __assign(__assign({}, app), { currSlide: slidePos });
}
function resizeImage(app, id, width, height) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id) {
            newObj.width = width;
            newObj.height = height;
        }
        return newObj;
    });
    return __assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) });
}
function toggleBoldText(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id) {
            newObj.weight = newObj.weight === 400 ? 700 : 400;
        }
        return newObj;
    });
    return __assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) });
}
function toggleItalicText(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id) {
            newObj.style = newObj.style === 'italic' ? 'unset' : 'italic';
        }
        return newObj;
    });
    return __assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) });
}
function toggleUnderlinedText(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id) {
            newObj.decoration =
                newObj.decoration === 'underline' ? 'unset' : 'underline';
        }
        return newObj;
    });
    return __assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) });
}
function changeTextSize(app, id, size) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id) {
            newObj.size = size;
        }
        return newObj;
    });
    return __assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) });
}
function setSlideBg(app, id, imgPath) {
    var slide = app.slides.find(function (slideToFind) { return slideToFind.id === id; });
    var newSlide = slide;
    newSlide.backgroundImage = imgPath;
    return __assign(__assign({}, app), { slides: app.slides.map(function (obj) {
            if (obj.id === newSlide.id)
                return newSlide;
            return obj;
        }) });
}
function setSlideColor(app, id, color) {
    var slide = app.slides.find(function (slideToFind) { return slideToFind.id === id; });
    var newSlide = slide;
    newSlide.backgroundColor = color;
    return __assign(__assign({}, app), { slides: app.slides.map(function (obj) {
            if (obj.id === newSlide.id)
                return newSlide;
            return obj;
        }) });
}
function moveItem(app, id, x, y) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.map(function (obj) {
        var newObj = obj;
        if (newObj.id === id) {
            newObj.positionFromTopLeft.x = x;
            newObj.positionFromTopLeft.y = y;
        }
        return newObj;
    });
    return __assign(__assign({}, app), { slides: app.slides.map(function (slideToFind) {
            if (slideToFind.id === newSlide.id)
                return newSlide;
            return slideToFind;
        }) });
}
function deleteSlideObject(app, id) {
    var slide = app.slides.find(function (slideToFind) {
        return slideToFind.objects.find(function (obj) { return obj.id === id; }) !== undefined;
    });
    var newSlide = slide;
    newSlide.objects = newSlide.objects.filter(function (obj) { return obj.id !== id; });
    return __assign(__assign({}, app), { slides: app.slides.map(function (obj) {
            if (obj.id === id)
                return newSlide;
            return obj;
        }) });
}
function deleteSlide(app, id) {
    var slide = app.slides.find(function (slideToFind) { return slideToFind.id === id; });
    return __assign(__assign({}, app), { slides: app.slides.filter(function (obj) { return obj !== slide; }) });
}
module.exports = {
    deleteSlideObject: deleteSlideObject,
    deleteSlide: deleteSlide,
    changeSlide: changeSlide,
    resizeImage: resizeImage,
    toggleBoldText: toggleBoldText,
    toggleItalicText: toggleItalicText,
    toggleUnderlinedText: toggleUnderlinedText,
    setSlideBg: setSlideBg,
    setSlideColor: setSlideColor,
    changeTextSize: changeTextSize,
    moveItem: moveItem
};
