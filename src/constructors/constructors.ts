import { SettingsObject, SlideType, AppType, ImgObject, TextObject, ObjectsList } from '../model/model';
// import deepFreeze from 'deep-freeze';

export function createId(): string {
  return Date.now().toString();
}

export function createSlide(): SlideType {
  let objectsArr: ObjectsList = [];
  return { 
    id: createId(),
    objects: objectsArr,
    background: null,
  }
}

export function createSettings(slideWidth: string, slideHeight: string): SettingsObject {
  return {
    slideWidth: slideWidth,
    slideHeight: slideHeight,
  }
}

export function createApp(settings: SettingsObject): AppType {
  const slide: SlideType = createSlide();
  return {
    name: 'Название презентации',
    slides: [slide],
    currSlideId: slide.id,
    settings: settings,
    choosedObjectId: null,
  }
}

export function createImage(path: string): ImgObject {
  return {
    id: createId(),
    type: 'img',
    path: path,
    width: '150px',
    height: '150px',
    positionTopLeft: {x: 20, y: 20},
  }
}

export function createText(): TextObject {
  return {
    id: createId(),
    type: 'text',
    width: '100px',
    height: '50px',
    positionTopLeft: {x: 20, y: 20},
    fontStyle: 'unset',
    fontDecoration: 'unset',
    fontFamily: 'Open Sans',
    fontSize: '15px',
    color: '#000',
    data: 'Введите текст',
    fontWeight: 400,
  }
}
