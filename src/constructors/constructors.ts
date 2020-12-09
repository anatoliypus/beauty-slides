import { SettingsObject, SlideType, AppType, ImgObject, TextObject, ObjectsList, FigureType, FigureObject } from '../model/model';

function createId(): string {
  return String(Math.floor((Number(Date.now()) * Math.random())));
}

function createSlide(): SlideType {
  let objectsArr: ObjectsList = [];
  return { 
    id: constructors.createId(),
    objects: objectsArr,
    background: null,
    nextZIndex: 0
  }
}

function createSettings(slideWidth: string, slideHeight: string): SettingsObject {
  return {
    slideWidth: slideWidth,
    slideHeight: slideHeight,
  }
}

function createApp(settings: SettingsObject): AppType {
  const slide: SlideType = createSlide();
  return {
    name: 'Название презентации',
    slides: [slide],
    currSlideId: slide.id,
    settings: settings,
    choosedObjectId: '',
    choosedObjectType: null,
    bufferedId: null
  }
}

function createImage(path: string, zIndex: number): ImgObject {
  return {
    id: constructors.createId(),
    type: 'img',
    path: path,
    width: '150px',
    height: '150px',
    positionTopLeft: {x: 20, y: 20},
    zIndex: zIndex
  }
}

function createFigure(type: FigureType, zIndex: number): FigureObject {
  return{
    id: constructors.createId(),
    type: 'figure',
    figure: type,
    width: '150px',
    height: '150px',
    positionTopLeft: {x: 20, y: 20},
    strokeColor: '#000',
    background: null,
    strokeWidth: 1,
    borderRadius: 0,
    zIndex: zIndex
  }
}

function createText(zIndex: number): TextObject {
  return {
    id: constructors.createId(),
    type: 'text',
    width: '300px',
    height: '50px',
    positionTopLeft: {x: 20, y: 20},
    fontStyle: 'unset',
    fontDecoration: 'unset',
    fontFamily: 'Open Sans',
    fontSize: '35px',
    color: '#000',
    data: 'Введите текст',
    fontWeight: 400,
    alignment: 'left',
    zIndex: zIndex
  }
}

const constructors = {
  createId,
  createSlide,
  createSettings,
  createApp,
  createImage,
  createText,
  createFigure
}

export default constructors
