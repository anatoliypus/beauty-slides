import { AppType, SlideType, SlideNode, ImgObject, TextObject } from '../model/model';
import { getCurrentSlide, getSlideNode, replaceNode, replaceSlide } from './secondaryMethods';
import { createSlide } from '../constructors/constructors';

export function changeSlide(app: AppType, slideId: string): AppType {
  return Object.freeze({
    ...app,
    currSlideId: slideId,
  });
}

export function resizeImage(
  app: AppType,
  id: string,
  width: string,
  height: string
): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const img: SlideNode | undefined = getSlideNode(slide, id);
  if (! img || img.type !== 'img') return app;

  const newImg: ImgObject = img;
  newImg.width = width;
  newImg.height = height;

  const newSlide = replaceNode(slide, newImg);
  
  return Object.freeze(replaceSlide(app, newSlide));
}

export function toggleBoldText(app: AppType, id: string): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const text: SlideNode | undefined = getSlideNode(slide, id);
  if (! text || text.type !== 'text') return app;

  const newText: TextObject = text;
  newText.fontWeight = newText.fontWeight === 400 ? 700 : 400;

  const newSlide = replaceNode(slide, newText);
  
  return Object.freeze(replaceSlide(app, newSlide));
}

export function toggleItalicText(app: AppType, id: string): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const text: SlideNode | undefined = getSlideNode(slide, id);
  if (! text || text.type !== 'text') return app;

  const newText: TextObject = text;
  newText.fontStyle = newText.fontStyle === 'italic' ? 'unset' : 'italic';

  const newSlide = replaceNode(slide, newText);
  
  return Object.freeze(replaceSlide(app, newSlide));
}

export function toggleUnderlinedText(app: AppType, id: string): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const text: SlideNode | undefined = getSlideNode(slide, id);
  if (! text || text.type !== 'text') return app;

  const newText: TextObject = text;
  newText.fontDecoration = newText.fontDecoration === 'underline' ? 'unset' : 'underline';

  const newSlide = replaceNode(slide, newText);
  
  return Object.freeze(replaceSlide(app, newSlide));
}

export function changeTextSize(
  app: AppType,
  id: string,
  size: string
): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const text: SlideNode | undefined = getSlideNode(slide, id);
  if (! text || text.type !== 'text') return app;

  const newText: TextObject = text;
  newText.fontSize = size;

  const newSlide = replaceNode(slide, newText);
  
  return Object.freeze(replaceSlide(app, newSlide));
}

export function setSlideBg(
  app: AppType,
  id: string,
  background: string
): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const newSlide: SlideType = slide;
  newSlide.background = background;

  return Object.freeze(replaceSlide(app, newSlide));
}

export function moveItem(
  app: AppType,
  id: string,
  x: number,
  y: number
): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const newSlide: SlideType = slide;

  const item: SlideNode | undefined = getSlideNode(slide, id);
  if (! item) return app;

  item.positionTopLeft.x = x;
  item.positionTopLeft.y = y;

  return Object.freeze(replaceSlide(app, newSlide));
}

export function deleteSlideObject(app: AppType, id: string): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  const newSlide: SlideType = slide;
  newSlide.objects = newSlide.objects.filter((obj: SlideNode) => obj.id !== id);

  return Object.freeze(replaceSlide(app, newSlide));
}

export function deleteSlide(app: AppType, id: string): AppType {
  const slide: SlideType | undefined = getCurrentSlide(app);
  if (! slide) return app;

  return Object.freeze({
    ...app,
    slides: app.slides.filter((obj: SlideType) => obj !== slide),
  });
}

export function addSlide(app: AppType) {
  const slides = app.slides;
  slides.push(createSlide());
  return {
    ...app,
    ...slides
  }
}
