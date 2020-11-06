import { AppType, SlideType, SlideNode } from '../model/model';

export function getCurrentSlide(app: AppType): SlideType | undefined {
  const slide: SlideType | undefined = {...app}.slides.find(slide => slide.id === app.currSlideId);
  if (! slide) return undefined;
  return slide;
}

export function getSlideNode(slide: SlideType, id: string): SlideNode | undefined {
  const node: SlideNode | undefined = slide.objects.find(obj => obj.id === id);
  if (! node) return undefined;
  return node;
}

export function replaceNode(slide: SlideType, node: SlideNode): SlideType {
  return {
    ...slide,
    objects: slide.objects.map(obj => {
      if (obj.id === node.id) return node;
      return obj;
    })
  }
}

export function replaceSlide(app: AppType, newSlide: SlideType): AppType {
  return Object.freeze({
    ...app,
    slides: app.slides.map((slideToFind: SlideType) => {
      if (slideToFind.id === app.currSlideId) return newSlide;
      return slideToFind;
    }),
  });
}

export function cloneApp(obj: AppType): AppType {
  return JSON.parse(JSON.stringify(obj));
}