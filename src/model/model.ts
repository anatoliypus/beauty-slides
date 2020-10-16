export type Cords = {
  x: number;
  y: number;
};

export type NodeType = 'text' | 'img' | 'figure';

export type SlideObject = {
  type: NodeType;
  id: string;
  width: string;
  height: string;
  positionTopLeft: Cords;
};

export type TextObject = SlideObject & {
  type: 'text';
  data: string;
  fontFamily: string;
  fontSize: string;
  color: string;
  fontStyle: 'unset' | 'italic';
  fontWeight: number;
  fontDecoration: 'unset' | 'underline';
};

export type ImgObject = SlideObject & {
  type: 'img';
  path: string;
};

export type SlideNode = TextObject | ImgObject;

export type SlideType = {
  id: string;
  objects: Array<SlideNode>;
  background: string | null;
};

export type SettingsObject = {
  slideWidth: string;
  slideHeight: string;
};

export type AppType = {
  name: string;
  currSlideId: string;
  slides: Array<SlideType>;
  settings: SettingsObject;
  choosedObjectId: string | null;
};

// type history = {
// ...
// };
