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

type SlideType = {
  id: string;
  objects: Array<SlideNode>;
  background: string | null;
};

type SettingsObject = {
  slideWidth: string;
  slideHeight: string;
};

type AppType = {
  currSlideId: string | null;
  slides: Array<SlideType>;
  settings: SettingsObject;
  choosedObjectId: string | null;
};

// type history = {
// ...
// };

export {
  AppType,
  SlideType,
  ImgObject,
  TextObject,
  SlideObject,
  Cords,
  SlideNode,
  SettingsObject,
};
