function changeSlide(app, slidePos) {
  return {
    ...app,
    currentSlide: slidePos,
  };
}

function resizeImage(app, id, width, height) {
  const slide = app.slides.find(
    (slideToFind) =>
      slideToFind.objects.find((obj) => obj.id === id) !== undefined
  );

  const newSlide = slide.objects.map((obj) => {
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

  const newSlide = slide.objects.map((obj) => {
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

  const newSlide = slide.objects.map((obj) => {
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

  const newSlide = slide.objects.map((obj) => {
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

  const newSlide = slide.objects.map((obj) => {
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
  for (slide of app.slides) {
    if (slide.id == id) slide.backgroundImage = imgPath;
  }
  return app;
}

function setSlideColor(app, id, color) {
  for (slide of app.slides) {
    if (slide.id == id) slide.backgroundColor = color;
  }
  return app;
}

function moveItem(app, id, x, y) {
  for (slide of app.slides) {
    for (node of slide.objects) {
      if (node.id == id) {
        node.positionFromTopLeft.x = x;
        node.positionFromTopLeft.y = y;
      }
    }
  }
  return app;
}

module.exports = {
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
