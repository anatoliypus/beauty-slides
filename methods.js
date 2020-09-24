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

module.exports = { nextSlide, prevSlide, resizeImage };