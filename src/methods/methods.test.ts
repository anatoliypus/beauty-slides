import * as methods from './methods';
import { AppType } from '../model/model';
import * as constructors from '../constructors/constructors';
import { cloneApp } from './secondaryMethods';

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

