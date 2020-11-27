import {
    AppType,
    SlideType,
    SlideNode,
    ImgObject,
    TextObject,
    FigureType,
    SettingsObject,
} from '../model/model';
import {
    getCurrentSlide,
    getSlideNode,
    replaceNode,
    replaceSlide,
    cloneApp,
} from './secondaryMethods';
import constructors from '../constructors/constructors';
import { init } from '../dispatcher';
import { jsPDF } from 'jspdf';
import { font } from './fonts/Piazzola';
import hexRgb from 'hex-rgb';

export function changeSlide(app: AppType, slideId: string): AppType {
    if (app.currSlideId === slideId) return app;
    return {
        ...app,
        currSlideId: slideId,
    };
}

export function changeSelectedObject(app: AppType, objId: string): AppType {
    if (app.choosedObjectId === objId) return app;
    const slide = getCurrentSlide(app);
    if (! slide) return app;
    const node = getSlideNode(slide, objId);
    if (! node || objId === '') return {
        ...app,
        choosedObjectId: objId,
        choosedObjectType: null
    }
    return {
        ...app,
        choosedObjectId: objId,
        choosedObjectType: node.type
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

    const node: SlideNode | undefined = getSlideNode(slide, payload.id);

    if (!node) return app;

    const newNode: SlideNode = {
        ...node,
        width: payload.width,
        height: payload.height,
    };

    const newSlide = replaceNode(slide, newNode);

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

interface changeTextPayload {
    id: string;
    textData: string;
}

export function changeText(app: AppType, payload: changeTextPayload): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(slide, payload.id);
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        data: payload.textData,
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
        choosedObjectId: '',
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
            if (
                slideNode.type === 'img' &&
                slideNode.path.indexOf('.') !== -1
            ) {
                imgArr.push({ img: slideNode, slideId: index });
            }
        });
    });

    const promises = imgArr.map((imgObj) => {
        return new Promise(async (resolve) => {
            imgObj.img.path = await getBase64(imgObj.img);
            resolve();
        });
    });

    await Promise.all(promises);

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

export function importApp() {
    let input = document.createElement('input');
    input.style.display = 'none';
    input.type = 'file';
    input.onchange = () => {
        if (input.files) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string')
                    init(JSON.parse(reader.result));
            };
            reader.readAsText(file);
        }
    };
    document.body.append(input);
    input.click();
}

export async function exportPDF(app: AppType) {
    const pageSize = [
        parseInt(app.settings.slideWidth),
        parseInt(app.settings.slideHeight),
    ];
    const doc = new jsPDF({
        unit: 'pt',
        orientation: 'l',
        format: pageSize,
    });
    doc.addFileToVFS('Piazzolla.ttf', font);
    doc.addFont('Piazzolla.ttf', '1', 'normal');
    await setDocObjects(doc, app);
    doc.save('test.pdf');
}

async function setDocObjects(doc: jsPDF, app: AppType) {
    let firstSlide = true;
    for (let i = 0; i < app.slides.length; i++) {
        if (!firstSlide) doc.addPage();
        else firstSlide = false;
        await setSlideObjects(doc, app.slides[i], app.settings);
    }
}

async function setSlideObjects(
    doc: jsPDF,
    slide: SlideType,
    settings: SettingsObject
) {
    if (slide.background) {
        if (slide.background.indexOf('#') !== -1) {
            const rgb = hexRgb(slide.background);
            console.log(rgb);
            doc.setFillColor(
                Number(rgb.red),
                Number(rgb.green),
                Number(rgb.blue)
            );
            doc.rect(
                0,
                0,
                parseInt(settings.slideWidth),
                parseInt(settings.slideHeight),
                'F'
            );
        }
    }
    const promises = slide.objects.map(async (node) => {
        const promise = await setObject(doc, node);
        return promise;
    });
    await Promise.all(promises);
}

function setObject(doc: jsPDF, node: SlideNode) {
    return new Promise(async (resolve) => {
        if (node.type === 'text') {
            doc.setFontSize(parseInt(node.fontSize));
            doc.setFont('1', 'normal');
            doc.text(node.data, node.positionTopLeft.x, node.positionTopLeft.y);
        }
        if (node.type === 'img') {
            let base64 = node.path;
            if (node.path.indexOf('.') !== -1) {
                base64 = await getBase64(node);
            }
            doc.addImage(
                base64,
                'PNG',
                node.positionTopLeft.x,
                node.positionTopLeft.y,
                parseInt(node.width),
                parseInt(node.height)
            );
        }
        let style: string = 'S';
        if (node.type === 'figure') {
            const rgb = hexRgb(node.strokeColor);
            doc.setDrawColor(
                Number(rgb.red),
                Number(rgb.green),
                Number(rgb.blue)
            );
            if (node.background) {
                const rgb = hexRgb(node.background);
                doc.setFillColor(
                    Number(rgb.red),
                    Number(rgb.green),
                    Number(rgb.blue)
                );
                style = 'FD';
            }
        }
        if (node.type === 'figure' && node.figure === 'circle') {
            doc.circle(
                node.positionTopLeft.x + parseInt(node.width) / 2,
                node.positionTopLeft.y + parseInt(node.width) / 2,
                parseInt(node.width) / 2,
                style
            );
        }
        if (node.type === 'figure' && node.figure === 'rectangle') {
            doc.rect(
                node.positionTopLeft.x,
                node.positionTopLeft.y,
                parseInt(node.width),
                parseInt(node.height),
                style
            );
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            doc.triangle(
                node.positionTopLeft.x + parseInt(node.width) / 2,
                node.positionTopLeft.y,
                node.positionTopLeft.x,
                node.positionTopLeft.y + parseInt(node.height),
                node.positionTopLeft.x + parseInt(node.width),
                node.positionTopLeft.y + parseInt(node.height),
                style
            );
        }
        resolve();
    });
}
