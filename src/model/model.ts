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
   zIndex: number;
};

export type TextObject = SlideObject & {
   type: 'text';
   data: string;
   fontFamily: string;
   fontSize: string;
   color: string;
   fontStyle: 'unset' | 'italic';
   fontWeight: 700 | 400;
   fontDecoration: 'unset' | 'underline';
   alignment: 'center' | 'right' | 'left';
};

export type ImgObject = SlideObject & {
   type: 'img';
   path: string;
};

export type FigureType = 'circle' | 'rectangle' | 'triangle'| 'line';

export type FigureObject = SlideObject & {
   type: 'figure';
   figure: FigureType;
   strokeColor: string;
   background: null | string;
   strokeWidth: number;
   borderRadius: number;
}

export type SlideNode = TextObject | ImgObject | FigureObject;

export type ObjectsList = Array<SlideNode>;

export type SlideType = {
   id: string;
   objects: ObjectsList;
   background: string | null;
   nextZIndex: number;
};

export type SettingsObject = {
   slideWidth: number;
   slideHeight: number;
};

export type AppType = {
   name: string;
   currSlideId: string | null;
   slides: Array<SlideType>;
   settings: SettingsObject;
   choosedObject: choosedObjectType;
   bufferedId: string | null;
};

export type SlideCollection = Array<SlideType>;

export type choosedObjectType = {
    id: string | null;
    type: NodeType | null;
}

export type History = Array<AppType>;
