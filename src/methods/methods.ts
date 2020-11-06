import {
    AppType,
    SlideType,
    SlideNode,
    ImgObject,
    TextObject,
    FigureType,
} from '../model/model';
import {
    getCurrentSlide,
    getSlideNode,
    replaceNode,
    replaceSlide,
    cloneApp,
} from './secondaryMethods';
import constructors from '../constructors/constructors';
import imageToBase64 from 'image-to-base64';

// import deepFreeze from 'deep-freeze';

export function changeSlide(app: AppType, slideId: string): AppType {
    if (app.currSlideId === slideId) return app;
    return {
        ...app,
        currSlideId: slideId,
    };
}

interface resizeNodePayload {
    id: string;
    width: string;
    height: string;
}

export function resizeNode(app: AppType, payload: resizeNodePayload): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const img: SlideNode | undefined = getSlideNode(slide, payload.id);
    if (!img || img.type !== 'img') return app;

    const newImg: ImgObject = {
        ...img,
        width: payload.width,
        height: payload.height,
    };

    const newSlide = replaceNode(slide, newImg);

    return replaceSlide(app, newSlide);
}

export function toggleBoldText(app: AppType, id: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(slide, id);
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontWeight: text.fontWeight === 400 ? 700 : 400,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function toggleItalicText(app: AppType, id: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(slide, id);
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontStyle: text.fontStyle === 'italic' ? 'unset' : 'italic',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function toggleUnderlinedText(app: AppType, id: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(slide, id);
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontDecoration:
            text.fontDecoration === 'underline' ? 'unset' : 'underline',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

interface changeTextSizePayload {
    id: string;
    size: string;
}

export function changeTextSize(
    app: AppType,
    payload: changeTextSizePayload
): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(slide, payload.id);
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontSize: payload.size,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function setSlideBg(app: AppType, background: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newSlide: SlideType = {
        ...slide,
        background: background,
    };

    return replaceSlide(app, newSlide);
}

interface moveItemPayload {
    id: string;
    x: number;
    y: number;
}

export function moveItem(app: AppType, payload: moveItemPayload): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const item: SlideNode | undefined = getSlideNode(slide, payload.id);
    if (!item) return app;

    const newItem = {
        ...item,
        positionTopLeft: {
            x: payload.x,
            y: payload.y,
        },
    };

    const newSlide = replaceNode(slide, newItem);

    return replaceSlide(app, newSlide);
}

export function deleteSlideObject(app: AppType, id: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newSlide: SlideType = {
        ...slide,
        objects: slide.objects.filter((obj: SlideNode) => obj.id !== id),
    };

    return {
        ...replaceSlide(app, newSlide),
        choosedObjectId: null,
    };
}

export function deleteSlide(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;
    const newSlideList = { ...app }.slides.filter(
        (obj: SlideType) => obj !== slide
    );

    return {
        ...app,
        currSlideId: newSlideList.length === 0 ? null : newSlideList[0].id,
        slides: newSlideList,
    };
}

export function addSlide(app: AppType): AppType {
    const slides = { ...app }.slides;
    slides.push(constructors.createSlide());

    return {
        ...app,
        slides: slides,
        currSlideId: app.currSlideId === null ? slides[0].id : app.currSlideId,
    };
}

export function addImage(app: AppType, path: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newObjects = slide.objects;
    newObjects.push(constructors.createImage(path));

    const newSlide = {
        ...slide,
        objects: newObjects,
    };

    return replaceSlide(app, newSlide);
}

export function addFigure(app: AppType, type: FigureType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newObjects = slide.objects;
    newObjects.push(constructors.createFigure(type));

    const newSlide = {
        ...slide,
        objects: newObjects,
    };

    return replaceSlide(app, newSlide);
}

export function addText(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newObjects = slide.objects;
    newObjects.push(constructors.createText());

    const newSlide = {
        ...slide,
        objects: newObjects,
    };

    return replaceSlide(app, newSlide);
}

export function changePresentationName(app: AppType, name: string): AppType {
    return {
        ...app,
        name: name,
    };
}

export async function exportApp(app: AppType) {
    interface ImgArrObject {
        img: ImgObject;
        slideId: number;
    }

    let expApp = cloneApp(app);
    let imgArr: Array<ImgArrObject> = [];

    expApp.slides.forEach((slide, index) => {
        slide.objects.forEach((slideNode) => {
            if (slideNode.type === 'img') {
                imgArr.push({ img: slideNode, slideId: index });
            }
        });
    });

    for (let imgObj of imgArr)
        await new Promise(async (resolve) => {
            imgObj.img.path = await getBase64(imgObj.img);
            resolve();
        });

    for (let imgObj of imgArr) {
        let newSlide = expApp.slides[imgObj.slideId];
        newSlide = replaceNode(newSlide, imgObj.img);
        expApp = replaceSlide(expApp, newSlide);
    }

    const json = JSON.stringify(expApp);
    downloadJSON(json, expApp.name);
}

function downloadJSON(json: string, fileName: string): void {
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    let blob = new Blob([json], { type: 'octet/stream' }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName + '.json';
    a.click();
    window.URL.revokeObjectURL(url);
}

function getBase64(image: ImgObject): Promise<string> {
    return new Promise((resolve) => {
        let img = new Image(parseInt(image.width), parseInt(image.height));
        img.src = image.path;
        img.crossOrigin = 'Anonymous';

        img.onload = function () {
            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
            canvas.height = img.naturalHeight;
            canvas.width = img.naturalWidth;
            if (ctx) ctx.drawImage(img, 0, 0);
            var uri = canvas.toDataURL('image/png');
            resolve(uri);
        };
    });
}
