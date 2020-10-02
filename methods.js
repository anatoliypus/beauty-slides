function changeSlide(app, slidePos) {
  return {
    ...app,
    currentSlide: slidePos
  };
}

function resizeImage(app, id, width, height) {
  const slide = app.slides.find(slide => slide.objects.find(obj => obj.id == id) !== undefined);
  const newSlide = slide.objects.map(obj => {
    if (obj.id == id) {
      obj.width = width;
      obj.height = height;
    }
    return obj;
  });
  return {
    ...app,
    slides: app.slides.map(slide => {
      if (slide.id == newSlide.id) return newSlide;
      else return slide;
    })
  };
}

function toggleBoldText(app, id) {
  for ( slide of app.slides ) {
    for ( node of slide.objects ) {
      if ( node.id == id ) {
        node.weight = node.weight === 400 ? 700 : 400;
      }
    }
  }
  return app;
}

function toggleItalicText(app, id) {
  for ( slide of app.slides ) {
    for ( node of slide.objects ) {
      if ( node.id == id ) {
        node.style = node.weight === 'italic' ? 'unset' : 'italic';
      }
    }
  }
  return app;
}

function toggleUnderlinedText(app, id) {
  for ( slide of app.slides ) {
    for ( node of slide.objects ) {
      if ( node.id == id ) {
        textNode.decoration = textNode.decoration === 'underline' ? 'unset' : 'underline';
      }
    }
  }
  return app;
}

function changeTextSize(app, id, size) {
  for ( slide of app.slides ) {
    for ( node of slide.objects ) {
      if ( node.id == id ) {
        node.size = size;
      }
    }
  }
  return app;
}

function setSlideBg(app, id, imgPath) {
  for ( slide of app.slides ) {
    if ( slide.id == id ) slide.backgroundImage = imgPath;
  }
  return app;
}

function setSlideColor(app, id, color) {
  for ( slide of app.slides ) {
    if ( slide.id == id ) slide.backgroundColor = color;
  }
  return app;
}

function moveItem(app, id, x, y) {
  for ( slide of app.slides ) {
    for ( node of slide.objects ) {
      if ( node.id == id ) {
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
  moveItem
};