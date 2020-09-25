const methods = require('./methods');

let slide1 = {
  width: '800px',
  height: '600px',
  id: 0,
  position: 1,
  objects: {
    text: [
      {
        id: 1, 
        data: 'Hello, this is slide number 1!', 
        font: 'Open Sans', 
        size: '15px', 
        color: '#000', 
        style: null, 
        weight: 400, 
        decoration: null,
        positionFromTopLeft: {
          x: 0.15,
          y: 0.15
        }
      }
    ],
    img: [
      {
        id: 2,
        path: './img/imageFromSlide1.jpg',
        width: '100px',
        height: '100px',
        positionFromTopLeft: {
          x: 0.50,
          y: 0.30
        }
      }
    ]
  },
  backgroundImage: null,
  backgroundColor: null
};

let app = {
  currSlide: 0,
  slides: [ slide1 ],
  settings: null,
  history: null,
  choosedObjectId: 1,
  nextId: 3
};

console.dir(app.slides[0].objects.img[0]);
app = methods.resizeImage(app, 2, '150px', '100px');
console.dir(app.slides[0].objects.img[0]);

