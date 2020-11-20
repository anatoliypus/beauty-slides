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

export type FigureType = 'circle' | 'rectangle' | 'triangle';

export type FigureObject = SlideObject & {
   type: 'figure';
   figure: FigureType;
   strokeColor: string;
   background: null | string;
}

export type SlideNode = TextObject | ImgObject | FigureObject;

export type ObjectsList = Array<SlideNode>;

export type SlideType = {
   id: string;
   objects: ObjectsList;
   background: string | null;
};

export type SettingsObject = {
   slideWidth: string;
   slideHeight: string;
};

export type AppType = {
   name: string;
   currSlideId: string | null;
   slides: Array<SlideType>;
   settings: SettingsObject;
   choosedObjectId: string;
};

export type History = Array<AppType>;
