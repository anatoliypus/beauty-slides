const slide1 = {
  id: '1601835516025',
  objects: [
    {
      type: 'text',
      id: '1601835540226',
      data: 'Hello, this is slide number 1!',
      fontFamily: 'Open Sans',
      fontSize: '15px',
      color: '#000',
      fontStyle: 'unset',
      fontWeight: 400,
      fontDecoration: 'unset',
      positionTopLeft: {
        x: 0.15,
        y: 0.15,
      },
    },
    {
      type: 'img',
      id: '1601835542129',
      path: './img/imageFromSlide1-1.jpg',
      width: '100px',
      height: '100px',
      positionTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
    {
      type: 'img',
      id: '1601835542503',
      path: './img/imageFromSlide1-2.jpg',
      width: '100px',
      height: '100px',
      positionTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
  ],
  background: 'green',
};

const slide2 = {
  id: '1601835546216',
  objects: [
    {
      type: 'text',
      id: '1601835546825',
      data: 'Hello, this is slide number 2!',
      fontFamily: 'Open Sans',
      fontSize: '15px',
      color: '#000',
      fontStyle: 'unset',
      fontWeight: 400,
      fontDecoration: 'unset',
      positionTopLeft: {
        x: 0.15,
        y: 0.15,
      },
    },
    {
      type: 'img',
      id: '1601835547297',
      path: './img/imageFromSlide2-1.jpg',
      width: '100px',
      height: '100px',
      positionTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
    {
      type: 'img',
      id: '1601835547742',
      path: './img/imageFromSlide2-2.jpg',
      width: '100px',
      height: '100px',
      positionTopLeft: {
        x: 0.5,
        y: 0.3,
      },
    },
  ],
  background: 'red',
};

const settings = {
  slideWidth: '800px',
  slideHeight: '600px',
};

const app = {
  currSlideId: '1601835546216',
  slides: [slide1, slide2],
  settings,
  choosedObjectId: '1601835547742',
};

module.exports = { app };
