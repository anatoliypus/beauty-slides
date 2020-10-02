type Cords = {
  x: number;
  y: number;
}

type SlideObject = {
  type: string;
  id: string;
}

type TextObject = SlideObject & { 
  data: string;
  font: string;
  color: string;
  style: null | string;
  weight: number;
  decoration: null | string;
  positionTopLeft: Cords;
}

type ImgObject = SlideObject & {
  path: string;
  width: string;
  height: string;
  positionTopLeft: Cords;
}

type Slide = {
  width: string;
  height: string;
  id: string;
  position: 1;
  objects: Array<TextObject | ImgObject>;
  backroungImage: string | null;
  backgroundColor: string | null;
}

type App = {
  currSlide: number;
  slides: Array<Slide>;
  settings: null | object;
  history: null | object;
  choosedObjectId: string;
}