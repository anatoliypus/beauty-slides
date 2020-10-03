type Cords = {
  x: number;
  y: number;
};

type NodeType = 'text' | 'img' | 'figure';

type SlideObject = {
  type: NodeType;
  id: string;
  width: string;
  height: string;
  positionTopLeft: Cords;
};

type TextObject = SlideObject & {
  type: 'text';
  data: string;
  fontFamily: string;
  fontSize: string;
  color: string;
  fontStyle: 'unset' | 'italic';
  fontWeight: number;
  fontDecoration: 'unset' | 'underline';
};

type ImgObject = SlideObject & {
  type: 'img';
  path: string;
};

type SlideNode = TextObject | ImgObject;

type Slide = {
  id: string;
  objects: Array<SlideNode>;
  background: string;
};

type SettingsObject = {
  slideWidth: string;
  slideHeight: string;
};

type App = {
  currSlide: string;
  slides: Array<Slide>;
  settings: SettingsObject;
  choosedObjectId: string;
};

// type history = {
// ...
// };

export { App, Slide, ImgObject, TextObject, SlideObject, Cords, SlideNode };
