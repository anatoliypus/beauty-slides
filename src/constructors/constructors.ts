import { SettingsObject, Cords, SlideType, AppType, ImgObject, TextObject } from '../model/model';

function createId(): string {
  return Date.now().toString();
}

export function createSlide(): SlideType {
  return { 
    id: createId(),
    objects: [],
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

export function createImage(
  path: string,
  width: string,
  height: string,
  cords: Cords
): ImgObject {
  return {
    id: createId(),
    type: 'img',
    path: path,
    width: width,
    height: height,
    positionTopLeft: cords,
  }
}

export function createText(width: string, height: string, cords: Cords): TextObject {
  return {
    id: createId(),
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
    fontWeight: 400,
  }
}
