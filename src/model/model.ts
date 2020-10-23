export type Cords = {
  readonly x: number;
  readonly y: number;
};

export type NodeType = 'text' | 'img' | 'figure';

export type SlideObject = {
  readonly type: NodeType;
  readonly id: string;
  readonly width: string;
  readonly height: string;
  readonly positionTopLeft: Cords;
};

export type TextObject = SlideObject & {
  readonly type: 'text';
  readonly data: string;
  readonly fontFamily: string;
  readonly fontSize: string;
  readonly color: string;
  readonly fontStyle: 'unset' | 'italic';
  readonly fontWeight: number;
  readonly fontDecoration: 'unset' | 'underline';
};

export type ImgObject = SlideObject & {
  readonly type: 'img';
  readonly path: string;
};

export type FigureType = 'circle' | 'rectangle' | 'triangle';

export type FigureObject = SlideObject & {
  readonly type: 'figure';
  readonly figure: FigureType;
}

export type SlideNode = TextObject | ImgObject | FigureObject;

export type ObjectsList = Array<SlideNode>;

export type SlideType = {
  readonly id: string;
  readonly objects: ObjectsList;
  readonly background: string | null;
};

export type SettingsObject = {
  readonly slideWidth: string;
  readonly slideHeight: string;
};

export type AppType = {
  readonly name: string;
  readonly currSlideId: string | null;
  readonly slides: Array<SlideType>;
  readonly settings: SettingsObject;
  readonly choosedObjectId: string | null;
};
