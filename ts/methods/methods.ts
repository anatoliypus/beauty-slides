import { AppType, SlideType, SlideNode } from '../model/model';

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
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind: SlideType) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: SlideType = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'img') {
      newObj.width = width;
      newObj.height = height;
    }
    return newObj;
  });

  return Object.freeze({
    ...app,
    slides: app.slides.map((slideToFind: SlideType) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  });
}

export function toggleBoldText(app: AppType, id: string): AppType {
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind: SlideType) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: SlideType = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontWeight = newObj.fontWeight === 400 ? 700 : 400;
    }
    return newObj;
  });

  return Object.freeze({
    ...app,
    slides: app.slides.map((slideToFind: SlideType) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  });
}

export function toggleItalicText(app: AppType, id: string): AppType {
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind: SlideType) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: SlideType = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontStyle = newObj.fontStyle === 'italic' ? 'unset' : 'italic';
    }
    return newObj;
  });

  return Object.freeze({
    ...app,
    slides: app.slides.map((slideToFind: SlideType) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  });
}

export function toggleUnderlinedText(app: AppType, id: string): AppType {
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind: SlideType) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: SlideType = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontDecoration =
        newObj.fontDecoration === 'underline' ? 'unset' : 'underline';
    }
    return newObj;
  });

  return Object.freeze({
    ...app,
    slides: app.slides.map((slideToFind: SlideType) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  });
}

export function changeTextSize(
  app: AppType,
  id: string,
  size: string
): AppType {
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind: SlideType) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: SlideType = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontSize = size;
    }
    return newObj;
  });

  return Object.freeze({
    ...app,
    slides: app.slides.map((slideToFind: SlideType) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  });
}

export function setSlideBg(
  app: AppType,
  id: string,
  background: string
): AppType {
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind) => slideToFind.id === id
  );

  const newSlide: SlideType = slide;
  newSlide.background = background;

  return Object.freeze({
    ...app,
    slides: app.slides.map((obj: SlideType) => {
      if (obj.id === newSlide.id) return newSlide;
      return obj;
    }),
  });
}

export function moveItem(
  app: AppType,
  id: string,
  x: number,
  y: number
): AppType {
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind: SlideType) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: SlideType = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id) {
      newObj.positionTopLeft.x = x;
      newObj.positionTopLeft.y = y;
    }
    return newObj;
  });

  return Object.freeze({
    ...app,
    slides: app.slides.map((slideToFind: SlideType) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  });
}

export function deleteSlideObject(app: AppType, id: string): AppType {
  const slide: SlideType = { ...app }.slides.find(
    (slideToFind: SlideType) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );
  const newSlide: SlideType = slide;
  newSlide.objects = newSlide.objects.filter((obj: SlideNode) => obj.id !== id);

  return Object.freeze({
    ...app,
    slides: app.slides.map((obj: SlideType) => {
      if (obj.id === id) return newSlide;
      return obj;
    }),
  });
}

export function deleteSlide(app: AppType, id: string): AppType {
  const slide = { ...app }.slides.find(
    (slideToFind: SlideType) => slideToFind.id === id
  );

  return Object.freeze({
    ...app,
    slides: app.slides.filter((obj: SlideType) => obj !== slide),
  });
}
