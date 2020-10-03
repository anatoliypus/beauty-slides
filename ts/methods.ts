import { App, Slide, SlideNode } from './model';

export function changeSlide(app: App, slidePos: number): App {
  return {
    ...app,
    currSlide: slidePos,
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
    if (newObj.id === id) {
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
    if (newObj.id === id) {
      newObj.weight = newObj.weight === 400 ? 700 : 400;
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
    if (newObj.id === id) {
      newObj.style = newObj.style === 'italic' ? 'unset' : 'italic';
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
    if (newObj.id === id) {
      newObj.decoration =
        newObj.decoration === 'underline' ? 'unset' : 'underline';
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
    if (newObj.id === id) {
      newObj.size = size;
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

export function setSlideBg(app: App, id: string, imgPath: string): App {
  const slide: Slide = app.slides.find((slideToFind) => slideToFind.id === id);

  const newSlide: Slide = slide;
  newSlide.backgroundImage = imgPath;

  return {
    ...app,
    slides: app.slides.map((obj: Slide) => {
      if (obj.id === newSlide.id) return newSlide;
      return obj;
    }),
  };
}

export function setSlideColor(app: App, id: string, color: string): App {
  const slide: Slide = app.slides.find((slideToFind) => slideToFind.id === id);

  const newSlide: Slide = slide;
  newSlide.backgroundColor = color;

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
