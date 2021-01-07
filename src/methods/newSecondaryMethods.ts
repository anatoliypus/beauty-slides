import { AppType, SlideType, SlideNode, SlideCollection } from '../model/model';

export function getCurrentSlide(slides: SlideCollection, currentId: string): SlideType | undefined {
  const slide: SlideType | undefined = slides.find(slide => slide.id === currentId);
  if (! slide) return undefined;
  return slide;
}

export function getSlideNode(slide: SlideType, id: string | null): SlideNode | undefined {
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

export function replaceSlide(slides: SlideCollection, newSlide: SlideType): SlideCollection {
    return slides.map((slideToFind: SlideType) => {
        if (slideToFind.id === newSlide.id) return newSlide;
        return slideToFind;
    })
}

export function cloneApp(obj: AppType): AppType {
  return JSON.parse(JSON.stringify(obj));
}