function nextSlide(app) {
  if ( app.slides.length - 1 > app.currSlide ) app.currSlide++;
  return app;
}

function prevSlide(app) {
  if ( app.currSlide > 0 ) app.currSlide--;
  return app;
}

module.exports.nextSlide = nextSlide;
module.exports.prevSlide = prevSlide;