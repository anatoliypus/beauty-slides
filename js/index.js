const methods = require('./methods');

const slide1 = {
  width: '800px',
  height: '600px',
  id: 0,
  objects: [
    {
      type: 'text',
      id: 1,
      data: 'Hello, this is slide number 1!',
      font: 'Open Sans',
      size: '15px',
      color: '#000',
      style: 'unset',
      weight: 400,
      decoration: 'unset',
      positionFromTopLeft: {
        x: 0.15,
        y: 0.15,
      },
    },
    {
      type: 'img',
      id: 2,
      path: './img/imageFromSlide1-1.jpg',
      width: '100px',
      height: '100px',
      positionFromTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
    {
      type: 'img',
      id: 3,
      path: './img/imageFromSlide1-2.jpg',
      width: '100px',
      height: '100px',
      positionFromTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
  ],
  backgroundImage: null,
  backgroundColor: null,
};

const slide2 = {
  width: '800px',
  height: '600px',
  id: 4,
  objects: [
    {
      type: 'text',
      id: 5,
      data: 'Hello, this is slide number 2!',
      font: 'Open Sans',
      size: '15px',
      color: '#000',
      style: 'unset',
      weight: 400,
      decoration: 'unset',
      positionFromTopLeft: {
        x: 0.15,
        y: 0.15,
      },
    },
    {
      type: 'img',
      id: 6,
      path: './img/imageFromSlide2-1.jpg',
      width: '100px',
      height: '100px',
      positionFromTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
    {
      type: 'img',
      id: 7,
      path: './img/imageFromSlide2-2.jpg',
      width: '100px',
      height: '100px',
      positionFromTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
  ],
  backgroundImage: null,
  backgroundColor: null,
};

const app = {
  currSlide: 1,
  slides: [slide1, slide2],
  settings: null,
  history: null,
  choosedObjectId: 1,
};
