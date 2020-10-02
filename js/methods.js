function changeSlide(app, slidePos) {
  return {
    ...app,
    currSlide: slidePos,
  };
}

function resizeImage(app, id, width, height) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );

  const newSlide = slide;

  newSlide.objects = newSlide.objects.map((obj) => {
    const newObj = obj;
    if (newObj.id === id) {
      newObj.width = width;
      newObj.height = height;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

function toggleBoldText(app, id) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );

  const newSlide = slide;

  newSlide.objects = newSlide.objects.map((obj) => {
    const newObj = obj;
    if (newObj.id === id) {
      newObj.weight = newObj.weight === 400 ? 700 : 400;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

function toggleItalicText(app, id) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );

  const newSlide = slide;

  newSlide.objects = newSlide.objects.map((obj) => {
    const newObj = obj;
    if (newObj.id === id) {
      newObj.style = newObj.style === 'italic' ? 'unset' : 'italic';
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

function toggleUnderlinedText(app, id) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );

  const newSlide = slide;

  newSlide.objects = newSlide.objects.map((obj) => {
    const newObj = obj;
    if (newObj.id === id) {
      newObj.decoration =
        newObj.decoration === 'underline' ? 'unset' : 'underline';
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

function changeTextSize(app, id, size) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );

  const newSlide = slide;

  newSlide.objects = newSlide.objects.map((obj) => {
    const newObj = obj;
    if (newObj.id === id) {
      newObj.size = size;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

function setSlideBg(app, id, imgPath) {
  const slide = app.slides.find((slideToFind) => slideToFind.id === id);

  const newSlide = slide;
  newSlide.backgroundImage = imgPath;

  return {
    ...app,
    slides: app.slides.map((obj) => {
      if (obj.id === newSlide.id) return newSlide;
      return obj;
    }),
  };
}

function setSlideColor(app, id, color) {
  const slide = app.slides.find((slideToFind) => slideToFind.id === id);

  const newSlide = slide;
  newSlide.backgroundColor = color;

  return {
    ...app,
    slides: app.slides.map((obj) => {
      if (obj.id === newSlide.id) return newSlide;
      return obj;
    }),
  };
}

function moveItem(app, id, x, y) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );

  const newSlide = slide;

  newSlide.objects = newSlide.objects.map((obj) => {
    const newObj = obj;
    if (newObj.id === id) {
      newObj.positionFromTopLeft.x = x;
      newObj.positionFromTopLeft.y = y;
    }
    return newObj;
  });

  return {
    ...app,
    slides: app.slides.map((slideToFind) => {
      if (slideToFind.id === newSlide.id) return newSlide;
      return slideToFind;
    }),
  };
}

function deleteSlideObject(app, id) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );
  const newSlide = slide;
  newSlide.objects = newSlide.objects.filter((obj) => obj.id !== id);

  return {
    ...app,
    slides: app.slides.map((obj) => {
      if (obj.id === id) return newSlide;
      return obj;
    }),
  };
}

function deleteSlide(app, id) {
  const slide = app.slides.find((slideToFind) => slideToFind.id === id);

  return {
    ...app,
    slides: app.slides.filter((obj) => obj !== slide),
  };
}

module.exports = {
  deleteSlideObject,
  deleteSlide,
  changeSlide,
  resizeImage,
  toggleBoldText,
  toggleItalicText,
  toggleUnderlinedText,
  setSlideBg,
  setSlideColor,
  changeTextSize,
  moveItem,
};
