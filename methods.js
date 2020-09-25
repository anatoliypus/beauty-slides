function nextSlide(app) {
  if ( app.slides.length - 1 > app.currSlide ) app.currSlide++;
  return app;
}

function prevSlide(app) {
  if ( app.currSlide > 0 ) app.currSlide--;
  return app;
}

function resizeImage(app, id, width, height) {
  for ( slide of app.slides ) {
    for ( img of slide.objects.img ) {
      if ( img.id == id ) {
        img.width = width;
        img.height = height;
      }
    }
  }
  return app;
}

function toggleBoldText(app, id) {
  for ( slide of app.slides ) {
    for (textNode of slide.objects.text) {
      if ( textNode.id == id ) {
        textNode.weight = textNode.weight === 400 ? 700 : 400;
      }
    }
  }
  return app;
}

function toggleItalicText(app, id) {
  for ( slide of app.slides ) {
    for (textNode of slide.objects.text) {
      if ( textNode.id == id ) {
        textNode.style = textNode.weight === 'italic' ? 'unset' : 'italic';
      }
    }
  }
  return app;
}

function toggleUnderlinedText(app, id) {
  for ( slide of app.slides ) {
    for (textNode of slide.objects.text) {
      if ( textNode.id == id ) {
        textNode.decoration = textNode.decoration === 'overline' ? 'unset' : 'overline';
      }
    }
  }
  return app;
}

function changeTextSize(app, id, size) {
  for ( slide of app.slides ) {
    for (textNode of slide.objects.text) {
      if ( textNode.id == id ) {
        textNode.size = size;
      }
    }
  }
  return app;
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

module.exports = { 
  nextSlide, 
  prevSlide, 
  resizeImage, 
  toggleBoldText, 
  toggleItalicText,
  toggleUnderlinedText, 
  setSlideBg, 
  setSlideColor,
  changeTextSize
};