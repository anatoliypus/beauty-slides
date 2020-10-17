import * as methods from './methods';
import { AppType } from '../model/model';
import * as constructors from '../constructors/constructors';
import { cloneApp } from './secondaryMethods';
import { createVoidZero } from 'typescript';

describe('changing slide test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));

  test('changing slide', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.currSlideId = '1602326146191';
    
    const result = methods.changeSlide(app, '1602326146191');
    expect(result).toEqual(changedApp);
  });
});

describe('changing size of image test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides[0].objects.push(constructors.createImage('img.jpg', '100px', '100px', {x: 10, y: 10}));

  test('changing size', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].objects[0].width = '150px';
    changedApp.slides[0].objects[0].height = '150px';

    const result = methods.resizeImage(app, app.slides[0].objects[0].id, '150px', '150px');
    expect(result).toEqual(changedApp);
  });

  test('changing size of unexisting object', () => {
    const result = methods.resizeImage(app, '1', '150px', '150px');
    expect(result).toEqual(app);
  });
});

describe('changing text weight', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides[0].objects.push(constructors.createText('100px', '100px', {x: 12, y: 20}));
  let myMock = constructors.createId();
  test('changing weight', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].objects[0].fontWeight = 700;

    const result = methods.toggleBoldText(app, myMock);
    expect(result).toEqual(changedApp);
  });
});

describe('changing text italic style', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides[0].objects.push(constructors.createText('100px', '100px', {x: 20, y: 20}));
  let myMock = constructors.createId();

  test('changing italic style', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].objects[0].fontStyle = 'italic';

    const result = methods.toggleBoldText(app, myMock);
    expect(result).toEqual(changedApp);
  });
});

describe('changing underline style of text', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides[0].objects.push(constructors.createText('100px', '100px', {x: 20, y: 20}));
  let myMock = constructors.createId();

  test('changing underline style', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].objects[0].fontDecoration = 'underline';

    const result = methods.toggleUnderlinedText(app, myMock);
    expect(result).toEqual(changedApp);
  });
});


describe('changing size of text test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides[0].objects.push(constructors.createText('100px', '100px', {x: 20, y: 20}));

  test('changing size', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].objects[0].width = '150px';
    changedApp.slides[0].objects[0].height = '150px';

    const result = methods.changeTextSize(app, app.slides[0].objects[0].id, '150px');
    expect(result).toEqual(changedApp);
  });

  test('changing size of unexisting object', () => {
    const result = methods.changeTextSize(app, '1', '150px');
    expect(result).toEqual(app);
  });
});

describe('changing slide bg test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides.push(constructors.createSlide());
  let myMock = constructors.createId();

  test('changing slide bg', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].background = 'pepega.jpg'
    
    const result = methods.setSlideBg(app, myMock, 'pepega.jpg');
    expect(result).toEqual(changedApp);
  });
});

describe('moving item', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides[0].objects.push(constructors.createImage('img.jpg', '100px', '100px', {x: 10, y: 10}));
  let myMock = constructors.createId();

  test('moving item', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].objects[0].positionTopLeft.x = 12;
    changedApp.slides[0].objects[0].positionTopLeft.y = 12;
    
    const result = methods.moveItem(app, myMock, 12, 12);
    expect(result).toEqual(changedApp);
  });
});

describe('deleting slide object test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app.slides[0].objects.push(constructors.createImage('img.jpg', '100px', '100px', {x: 10, y: 10}));
  let myMock = constructors.createId();

  test('deleting slide object', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0].objects[0] = undefined;
    
    const result = methods.deleteSlideObject(app, myMock);
    expect(result).toEqual(changedApp);
  });
});

describe('deleting slide  test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  let myMock = constructors.createId();

  test('deleting slide', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides[0] = undefined;
    
    const result = methods.deleteSlide(app, myMock);
    expect(result).toEqual(changedApp);
  });
});

describe('deleting slide  test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));

  test('deleting slide', () => {
    let changedApp: AppType = cloneApp(app);
    changedApp.slides.push(constructors.createSlide());
    
    const result = methods.addSlide(app);
    expect(result).toEqual(changedApp);
  });
});