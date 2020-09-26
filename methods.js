function changeSlide(app, slidePos) {
  return {
    ...app,
    currentSlide: slidePos
  };
}

function resizeImage(app, id, width, height) {
  for ( slide of app.slides ) {
    for ( node of slide.objects ) {
      if ( node.id == id ) {
        node.width = width;
        node.height = height;
      }
    }
  }
  return app;
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
  nextSlide, 
  prevSlide, 
  resizeImage, 
  toggleBoldText, 
  toggleItalicText,
  toggleUnderlinedText, 
  setSlideBg, 
  setSlideColor,
  changeTextSize,
  moveItem
};