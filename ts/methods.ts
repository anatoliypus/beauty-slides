import { App, Slide, SlideNode } from './model';

export function changeSlide(app: App, slideId: string): App {
  return {
    ...app,
    currSlide: slideId,
  };
}

export function resizeImage(
  app: App,
  id: string,
  width: string,
  height: string
): App {
  const slide: Slide = app.slides.find(
    (slideToFind: Slide) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: Slide = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'img') {
      newObj.width = width;
      newObj.height = height;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind: Slide) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

export function toggleBoldText(app: App, id: string): App {
  const slide: Slide = app.slides.find(
    (slideToFind: Slide) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: Slide = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontWeight = newObj.fontWeight === 400 ? 700 : 400;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind: Slide) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

export function toggleItalicText(app: App, id: string): App {
  const slide: Slide = app.slides.find(
    (slideToFind: Slide) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: Slide = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontStyle = newObj.fontStyle === 'italic' ? 'unset' : 'italic';
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind: Slide) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

export function toggleUnderlinedText(app: App, id: string): App {
  const slide: Slide = app.slides.find(
    (slideToFind: Slide) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: Slide = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontDecoration =
        newObj.fontDecoration === 'underline' ? 'unset' : 'underline';
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind: Slide) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

export function changeTextSize(app: App, id: string, size: string): App {
  const slide: Slide = app.slides.find(
    (slideToFind: Slide) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: Slide = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id && newObj.type === 'text') {
      newObj.fontSize = size;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind: Slide) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

export function setSlideBg(app: App, id: string, background: string): App {
  const slide: Slide = app.slides.find((slideToFind) => slideToFind.id === id);

  const newSlide: Slide = slide;
  newSlide.background = background;

  return {
    ...app,
    slides: app.slides.map((obj: Slide) => {
      if (obj.id === newSlide.id) return newSlide;
      return obj;
    }),
  };
}

export function moveItem(app: App, id: string, x: number, y: number): App {
  const slide: Slide = app.slides.find(
    (slideToFind: Slide) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );

  const newSlide: Slide = slide;

  newSlide.objects = newSlide.objects.map((obj: SlideNode) => {
    const newObj: SlideNode = obj;
    if (newObj.id === id) {
      newObj.positionTopLeft.x = x;
      newObj.positionTopLeft.y = y;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind: Slide) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

export function deleteSlideObject(app: App, id: string): App {
  const slide: Slide = app.slides.find(
    (slideToFind: Slide) =>
      slideToFind.objects.find((obj: SlideNode) => obj.id === id) !== undefined
  );
  const newSlide: Slide = slide;
  newSlide.objects = newSlide.objects.filter((obj: SlideNode) => obj.id !== id);

  return {
    ...app,
    slides: app.slides.map((obj: Slide) => {
      if (obj.id === id) return newSlide;
      return obj;
    }),
  };
}

export function deleteSlide(app: App, id: string): App {
  const slide = app.slides.find((slideToFind: Slide) => slideToFind.id === id);

  return {
    ...app,
    slides: app.slides.filter((obj: Slide) => obj !== slide),
  };
}
