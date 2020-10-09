import { SettingsObject, Cords, SlideType, AppType, ImgObject, TextObject } from '../model/model';

export function createSlide(): SlideType {
  return { 
    id: Date.now().toString(),
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
) {
  return {
    id: Date.now().toString(),
    type: 'img',
    path: path,
    width: width,
    height: height,
    positionTopLeft: cords,
  }
}

export function createText(width: string, height: string, cords: Cords) {
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
    fontWeight: 400,
  }
}
