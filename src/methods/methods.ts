import {
    AppType,
    SlideType,
    SlideNode,
    ImgObject,
    TextObject,
    FigureType,
    FigureObject,
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
import { font } from '../fonts/Piazzola';
import hexRgb from 'hex-rgb';

export function changeSlide(app: AppType, slideId: string): AppType {
    if (app.currSlideId === slideId) return app;
    return {
        ...app,
        currSlideId: slideId,
        choosedObjectId: null,
        choosedObjectType: null,
    };
}

export function changeSelectedObject(app: AppType, objId: string): AppType {
    if (app.choosedObjectId === objId) return app;
    const slide = getCurrentSlide(app);
    if (!slide) return app;
    const node = getSlideNode(slide, objId);
    if (!node || objId === '')
        return {
            ...app,
            choosedObjectId: null,
            choosedObjectType: null,
        };
    return {
        ...app,
        choosedObjectId: objId,
        choosedObjectType: node.type,
    };
}

export function copyObject(app: AppType): AppType {
    if (app.choosedObjectId)
        return {
            ...app,
            bufferedId: app.choosedObjectId
        };
    if (app.currSlideId)
        return {
            ...app,
            bufferedId: app.currSlideId
        };
    else throw new Error();
}

export function pasteObject(app: AppType): AppType {
    if (! app.bufferedId) return app;
    const slide = app.slides.find((slide) => slide.id === app.bufferedId);
    if (slide) {
        const newObjects = slide.objects.map((node) => {
            return {
                ...node,
                id: constructors.createId(),
            }
        });
        const newSlide = {
            ...slide,
            id: constructors.createId(),
            objects: newObjects,
            nextZIndex: ++slide.nextZIndex
        }
        return {
            ...app,
            slides: app.slides.concat([newSlide])
        }
    }
    let slideToFind: SlideType | null = null;
    let nodeToFind: SlideNode | null = null;
    for (let slide of app.slides) {
        const result = slide.objects.find((i) => i.id === app.bufferedId);
        if (result) {
            nodeToFind = result;
            slideToFind = slide;
        };
    }
    if (slideToFind && nodeToFind) {
        const newNode = {
            ...nodeToFind,
            id: constructors.createId(),
            positionTopLeft: {
                x: 100,
                y: 100
            },
            zIndex: slideToFind.nextZIndex
        }
        const newSlide = {
            ...slideToFind,
            objects: slideToFind.objects.concat([newNode]),
            nextZIndex: ++slideToFind.nextZIndex
        }
        return replaceSlide(app, newSlide)
    }
    return app;
}

export function strokeResize(app: AppType, newWidth: number): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const figure: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!figure || figure.type !== 'figure') return app;

    const newfigure: FigureObject = {
        ...figure,
        strokeWidth: newWidth,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(app, newSlide);
}

export function changeRectBorderRadius(app: AppType, newRadius: number): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const figure: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!figure || figure.type !== 'figure') return app;

    const newfigure: FigureObject = {
        ...figure,
        borderRadius: newRadius,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(app, newSlide);
}

export function strokeColorSet(app: AppType, newColor: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const figure: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!figure || figure.type !== 'figure') return app;

    const newfigure: FigureObject = {
        ...figure,
        strokeColor: newColor,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(app, newSlide);
}

export function figureBackgroundSet(app: AppType, newColor: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const figure: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!figure || figure.type !== 'figure') return app;

    const newfigure: FigureObject = {
        ...figure,
        background: newColor,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(app, newSlide);
}

interface resizeNodePayload {
    width: string;
    height: string;
}

export function resizeNode(app: AppType, payload: resizeNodePayload): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const node: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );

    if (!node) return app;

    const newNode: SlideNode = {
        ...node,
        width: payload.width,
        height: payload.height,
    };

    const newSlide = replaceNode(slide, newNode);

    return replaceSlide(app, newSlide);
}

export function toggleBoldText(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontWeight: text.fontWeight === 400 ? 700 : 400,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function toggleItalicText(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontStyle: text.fontStyle === 'italic' ? 'unset' : 'italic',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function toggleUnderlinedText(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontDecoration:
            text.fontDecoration === 'underline' ? 'unset' : 'underline',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function changeAlignment(
    app: AppType,
    alignment: 'right' | 'center' | 'left'
): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        alignment: alignment,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function changeTextFontFamily(app: AppType, family: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontFamily: family,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function changeTextSize(app: AppType, size: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        fontSize: size,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function changeTextColor(app: AppType, color: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;
    const newText: TextObject = {
        ...text,
        color: color,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(app, newSlide);
}

export function changeText(app: AppType, textData: string): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const text: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!text || text.type !== 'text') return app;

    const newText: TextObject = {
        ...text,
        data: textData,
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
    x: number;
    y: number;
}

export function moveItem(app: AppType, payload: moveItemPayload): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const item: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
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

export function decreaseZIndex(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const item: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!item || item.zIndex === 0) return app;

    const newItem = {
        ...item,
        zIndex: --item.zIndex
    };

    const newSlide = replaceNode(slide, newItem);
    newSlide.objects = newSlide.objects.map((el) => {
        if (el.id !== item.id && el.zIndex === item.zIndex) {
            const newEl = {...el};
            newEl.zIndex += 1;
            return newEl
        }
        return el
    });
    
    return replaceSlide(app, newSlide);
}

export function increaseZIndex(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const item: SlideNode | undefined = getSlideNode(
        slide,
        app.choosedObjectId
    );
    if (!item || slide.nextZIndex - item.zIndex === 1) return app;

    const newItem = {
        ...item,
        zIndex: ++item.zIndex
    };

    const newSlide = replaceNode(slide, newItem);
    newSlide.objects = newSlide.objects.map((el) => {
        if (el.id !== item.id && el.zIndex === item.zIndex) {
            const newEl = {...el};
            newEl.zIndex -= 1;
            return newEl
        }
        return el
    });

    return replaceSlide(app, newSlide);
}

export function deleteSlideObject(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newSlide: SlideType = {
        ...slide,
        objects: slide.objects.filter(
            (obj: SlideNode) => obj.id !== app.choosedObjectId
        ),
    };

    return {
        ...replaceSlide(app, newSlide),
        choosedObjectId: '',
        choosedObjectType: null,
    };
}

export function deleteSlide(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;
    const newSlideList = { ...app }.slides.filter(
        (obj: SlideType) => obj !== slide
    );
    if (! newSlideList.length) {
        newSlideList.push(constructors.createSlide());
    }

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
    newObjects.push(constructors.createImage(path, slide.nextZIndex));

    const newSlide = {
        ...slide,
        objects: newObjects,
        nextZIndex: ++slide.nextZIndex
    };

    return replaceSlide(app, newSlide);
}

export function addFigure(app: AppType, type: FigureType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newObjects = slide.objects;
    newObjects.push(constructors.createFigure(type, slide.nextZIndex));

    const newSlide = {
        ...slide,
        objects: newObjects,
        nextZIndex: ++slide.nextZIndex
    };

    return replaceSlide(app, newSlide);
}

export function addText(app: AppType): AppType {
    const slide: SlideType | undefined = getCurrentSlide(app);
    if (!slide) return app;

    const newObjects = slide.objects;
    newObjects.push(constructors.createText(slide.nextZIndex));

    const newSlide = {
        ...slide,
        objects: newObjects,
        nextZIndex: ++slide.nextZIndex
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
            let x1: number = node.positionTopLeft.x, 
                y1: number = node.positionTopLeft.y + (parseInt(node.height) - parseInt(node.fontSize))/parseInt(node.fontSize), 
                x2: number = node.positionTopLeft.x + node.data.length*(parseInt(node.fontSize)) - (parseInt(node.width) - (node.data.length + 0.38)*parseInt(node.fontSize)),
                y2: number = node.positionTopLeft.y + (parseInt(node.height) - parseInt(node.fontSize))/parseInt(node.fontSize)
            doc.setFontSize(parseInt(node.fontSize));
            doc.setFont(node.fontFamily, node.fontStyle);
            doc.text(node.data, node.positionTopLeft.x, node.positionTopLeft.y, {align: node.alignment});
            if(node.fontDecoration === 'underline'){
                doc.line(x1, y1, x2, y2)
            }
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
            if(node.borderRadius === 0) {
                doc.rect(
                  node.positionTopLeft.x,
                  node.positionTopLeft.y,
                  parseInt(node.width),
                  parseInt(node.height),
                  style
                );
            }
            else {
                doc.roundedRect(
                    node.positionTopLeft.x,
                    node.positionTopLeft.y,
                    parseInt(node.width),
                    parseInt(node.height),
                    node.borderRadius,
                    node.borderRadius,
                    style
                );
            }
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

export function getImageBase64FromDialog(): Promise<String> {
    return new Promise((resolve) => {
        let input = document.createElement('input');
        input.style.display = 'none';
        input.type = 'file';
        input.onchange = () => {
            if (input.files) {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    if (typeof reader.result === 'string')
                        resolve(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };
        document.body.append(input);
        input.click();
    });
}

interface changeSlideOrderPayload {
    slideId: string;
    slideAfterId: string;
}

export function changeSlideOrder(
    app: AppType,
    payload: changeSlideOrderPayload
) {
    if (payload.slideId !== payload.slideAfterId) {
        const slideToMoveIndex = app.slides.findIndex(
            (slide) => slide.id === payload.slideId
        );
        let newSlides: Array<SlideType> = [];
        if (payload.slideAfterId === '0') {
            newSlides.push(app.slides[slideToMoveIndex]);
        }
        for (let slide of app.slides) {
            if (slide.id === payload.slideAfterId) {
                newSlides.push(slide);
                newSlides.push(app.slides[slideToMoveIndex]);
            } else if (slide.id !== payload.slideId) {
                newSlides.push(slide);
            }
        }
        return {
            ...app,
            slides: newSlides,
        };
    } else return app;
}
