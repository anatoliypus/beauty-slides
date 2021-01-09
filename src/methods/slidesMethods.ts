import {
    AppType,
    SlideType,
    SlideNode,
    TextObject,
    FigureType,
    FigureObject,
    SlideCollection,
    choosedObjectType,
} from '../model/model';
import {
    getCurrentSlide,
    getSlideNode,
    replaceNode,
    replaceSlide,
} from './newSecondaryMethods';
import constructors from '../constructors/constructors';

export function strokeResize(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    newWidth: number
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const figure: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!figure || figure.type !== 'figure') return slides;

    const newfigure: FigureObject = {
        ...figure,
        strokeWidth: newWidth,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(slides, newSlide);
}

export function changeRectBorderRadius(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    newRadius: number
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const figure: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!figure || figure.type !== 'figure') return slides;

    const newfigure: FigureObject = {
        ...figure,
        borderRadius: newRadius,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(slides, newSlide);
}

export function strokeColorSet(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    newColor: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const figure: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!figure || figure.type !== 'figure') return slides;

    const newfigure: FigureObject = {
        ...figure,
        strokeColor: newColor,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(slides, newSlide);
}

export function figureBackgroundSet(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    newColor: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const figure: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!figure || figure.type !== 'figure') return slides;

    const newfigure: FigureObject = {
        ...figure,
        background: newColor,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(slides, newSlide);
}

export function resizeNode(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    width: string,
    height: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const node: SlideNode | undefined = getSlideNode(slide, choosedObject.id);

    if (!node) return slides;

    const newNode: SlideNode = {
        ...node,
        width: width,
        height: height,
    };

    const newSlide = replaceNode(slide, newNode);

    return replaceSlide(slides, newSlide);
}

export function toggleBoldText(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontWeight: text.fontWeight === 400 ? 700 : 400,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function toggleItalicText(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontStyle: text.fontStyle === 'italic' ? 'unset' : 'italic',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function toggleUnderlinedText(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontDecoration:
            text.fontDecoration === 'underline' ? 'unset' : 'underline',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeAlignment(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    alignment: 'right' | 'center' | 'left'
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        alignment: alignment,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeTextFontFamily(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    family: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontFamily: family,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeTextSize(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    size: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontSize: size,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeTextColor(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    color: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;
    const newText: TextObject = {
        ...text,
        color: color,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeText(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    textData: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        data: textData,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function setSlideBg(
    slides: SlideCollection,
    currentId: string,
    background: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const newSlide: SlideType = {
        ...slide,
        background: background,
    };

    return replaceSlide(slides, newSlide);
}

export function moveItem(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType,
    x: number,
    y: number
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const item: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!item) return slides;

    const newItem = {
        ...item,
        positionTopLeft: {
            x: x,
            y: y,
        },
    };

    const newSlide = replaceNode(slide, newItem);

    return replaceSlide(slides, newSlide);
}

export function decreaseZIndex(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const item: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!item || item.zIndex === 0) return slides;

    const newItem = {
        ...item,
        zIndex: --item.zIndex,
    };

    const newSlide = replaceNode(slide, newItem);
    newSlide.objects = newSlide.objects.map((el) => {
        if (el.id !== item.id && el.zIndex === item.zIndex) {
            const newEl = { ...el };
            newEl.zIndex += 1;
            return newEl;
        }
        return el;
    });

    return replaceSlide(slides, newSlide);
}

export function increaseZIndex(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const item: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!item || slide.nextZIndex - item.zIndex === 1) return slides;

    const newItem = {
        ...item,
        zIndex: ++item.zIndex,
    };

    const newSlide = replaceNode(slide, newItem);
    newSlide.objects = newSlide.objects.map((el) => {
        if (el.id !== item.id && el.zIndex === item.zIndex) {
            const newEl = { ...el };
            newEl.zIndex -= 1;
            return newEl;
        }
        return el;
    });

    return replaceSlide(slides, newSlide);
}

export function deleteSlideObject(
    slides: SlideCollection,
    currentId: string,
    choosedObject: choosedObjectType
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const newSlide: SlideType = {
        ...slide,
        objects: slide.objects.filter(
            (obj: SlideNode) => obj.id !== choosedObject.id
        ),
    };

    return replaceSlide(slides, newSlide);
}

export function pasteObject(slides: SlideCollection, bufferedId: string | null): SlideCollection {
    if (!bufferedId) return slides;
    const slide = slides.find((slide) => slide.id === bufferedId);
    if (slide) {
        const newObjects = slide.objects.map((node) => {
            return {
                ...node,
                id: constructors.createId(),
            };
        });
        const newSlide = {
            ...slide,
            id: constructors.createId(),
            objects: newObjects,
            nextZIndex: ++slide.nextZIndex,
        };
        return slides.concat([newSlide]);
    }
    let slideToFind: SlideType | null = null;
    let nodeToFind: SlideNode | null = null;
    for (let slide of slides) {
        const result = slide.objects.find((i) => i.id === bufferedId);
        if (result) {
            nodeToFind = result;
            slideToFind = slide;
        }
    }
    if (slideToFind && nodeToFind) {
        const newNode = {
            ...nodeToFind,
            id: constructors.createId(),
            positionTopLeft: {
                x: nodeToFind.positionTopLeft.x - 20,
                y: nodeToFind.positionTopLeft.y - 20,
            },
            zIndex: slideToFind.nextZIndex,
        };
        const newSlide = {
            ...slideToFind,
            objects: slideToFind.objects.concat([newNode]),
            nextZIndex: ++slideToFind.nextZIndex,
        };
        return replaceSlide(slides, newSlide);
    }
    return slides
}

export function deleteSlide(
    slides: SlideCollection,
    currentId: string,
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const newSlideList = slides.filter((obj: SlideType) => obj !== slide);
    if (!newSlideList.length) {
        newSlideList.push(constructors.createSlide());
    }

    return newSlideList;
}

export function addSlide(
    slides: SlideCollection,
): SlideCollection {
    const newCollection = slides.slice(0, slides.length);
    newCollection.push(constructors.createSlide());

    return newCollection;
}

export function addImage(
    slides: SlideCollection,
    currentId: string,
    path: string
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const newObjects = slide.objects;
    newObjects.push(constructors.createImage(path, slide.nextZIndex));

    const newSlide = {
        ...slide,
        objects: newObjects,
        nextZIndex: ++slide.nextZIndex,
    };

    return replaceSlide(slides, newSlide);
}

export function addFigure(
    slides: SlideCollection,
    currentId: string,
    type: FigureType
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const newObjects = slide.objects;
    newObjects.push(constructors.createFigure(type, slide.nextZIndex));

    const newSlide = {
        ...slide,
        objects: newObjects,
        nextZIndex: ++slide.nextZIndex,
    };

    return replaceSlide(slides, newSlide);
}

export function addText(
    slides: SlideCollection,
    currentId: string,
): SlideCollection {
    const slide: SlideType | undefined = getCurrentSlide(slides, currentId);
    if (!slide) return slides;

    const newObjects = slide.objects;
    newObjects.push(constructors.createText(slide.nextZIndex));

    const newSlide = {
        ...slide,
        objects: newObjects,
        nextZIndex: ++slide.nextZIndex,
    };

    return replaceSlide(slides, newSlide);
}

export function changeSlideOrder(
    slides: SlideCollection,
    slideId: string,
    slideAfterId: string
) {
    if (slideId !== slideAfterId) {
        const slideToMoveIndex = slides.findIndex(
            (slide) => slide.id === slideId
        );
        let newSlides: SlideCollection = [];
        if (slideAfterId === '0') {
            newSlides.push(slides[slideToMoveIndex]);
        }
        for (let slide of slides) {
            if (slide.id === slideAfterId) {
                newSlides.push(slide);
                newSlides.push(slides[slideToMoveIndex]);
            } else if (slide.id !== slideId) {
                newSlides.push(slide);
            }
        }
        return newSlides;
    } else return slides;
}
