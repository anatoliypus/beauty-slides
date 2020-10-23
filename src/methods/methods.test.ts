import * as methods from './methods';
import { AppType, TextObject } from '../model/model';
import constructors from '../constructors/constructors';

describe('changing slide test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));

  test('changing slide', () => {
    const result = methods.changeSlide(app, '1602326146191');
    expect(result.currSlideId).toBe('1602326146191');
  });
});

describe('changing size of node test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app = methods.addImage(app, '1.jpg');

  test('changing size', () => {
    const result = methods.resizeNode(app, app.slides[0].objects[0].id, '200px', '200px');
    expect(result.slides[0].objects[0].width).toEqual('200px');
    expect(result.slides[0].objects[0].height).toEqual('200px');
  });

  test('changing size of unexisting object', () => {
    const result = methods.resizeNode(app, '1', '200px', '200px');
    expect(result).toEqual(app);
  });
});

describe('changing text weight', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app = methods.addText(app);

  test('changing weight', () => {
    const result = methods.toggleBoldText(app, app.slides[0].objects[0].id);

    expect(result.slides[0].objects[0].type).toEqual('text');
    expect((result.slides[0].objects[0] as TextObject).fontWeight).toEqual(700);
  });

  test('changing weight two times, so should be equal to initial', () => {
    const result1 = methods.toggleBoldText(app, app.slides[0].objects[0].id);
    const result2 = methods.toggleBoldText(result1, app.slides[0].objects[0].id);

    expect(result2.slides[0].objects[0].type).toEqual('text');
    expect((result2.slides[0].objects[0] as TextObject).fontWeight).toEqual(400);
  })
});

describe('changing text italic style', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app = methods.addText(app);

  test('changing italic style', () => {
    const result = methods.toggleItalicText(app, app.slides[0].objects[0].id);

    expect(result.slides[0].objects[0].type).toEqual('text');
    expect((result.slides[0].objects[0] as TextObject).fontStyle).toEqual('italic');
  });

  test('changing style two times, so should be equal to initial', () => {
    const result1 = methods.toggleItalicText(app, app.slides[0].objects[0].id);
    const result2 = methods.toggleItalicText(result1, app.slides[0].objects[0].id);

    expect(result2.slides[0].objects[0].type).toEqual('text');
    expect((result2.slides[0].objects[0] as TextObject).fontStyle).toEqual('unset');
  })
});

// describe('changing underline style of text', () => {
//   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
//   app.slides[0].objects.push(constructors.createText('100px', '100px', {x: 20, y: 20}));
//   let myMock = constructors.createId();

//   test('changing underline style', () => {
//     let changedApp: AppType = cloneApp(app);
//     (changedApp.slides[0].objects[0] as TextObject).fontDecoration = 'underline';

//     const result = methods.toggleUnderlinedText(app, myMock);
//     expect(result).toEqual(changedApp);
//   });
// });


// describe('changing size of text test', () => {
//   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
//   app.slides[0].objects.push(constructors.createText('100px', '100px', {x: 20, y: 20}));

//   test('changing size', () => {
//     let changedApp: AppType = cloneApp(app);
//     changedApp.slides[0].objects[0].width = '150px';
//     changedApp.slides[0].objects[0].height = '150px';

//     const result = methods.changeTextSize(app, app.slides[0].objects[0].id, '150px');
//     expect(result).toEqual(changedApp);
//   });

//   test('changing size of unexisting object', () => {
//     const result = methods.changeTextSize(app, '1', '150px');
//     expect(result).toEqual(app);
//   });
// });

// describe('changing slide bg test', () => {
//   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
//   app.slides.push(constructors.createSlide());
//   let myMock = constructors.createId();

//   test('changing slide bg', () => {
//     let changedApp: AppType = cloneApp(app);
//     changedApp.slides[0].background = 'pepega.jpg'
    
//     const result = methods.setSlideBg(app, myMock, 'pepega.jpg');
//     expect(result).toEqual(changedApp);
//   });
// });

// describe('moving item', () => {
//   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
//   app.slides[0].objects.push(constructors.createImage('img.jpg', '100px', '100px', {x: 10, y: 10}));
//   let myMock = constructors.createId();

//   test('moving item', () => {
//     let changedApp: AppType = cloneApp(app);
//     changedApp.slides[0].objects[0].positionTopLeft.x = 12;
//     changedApp.slides[0].objects[0].positionTopLeft.y = 12;
    
//     const result = methods.moveItem(app, myMock, 12, 12);
//     expect(result).toEqual(changedApp);
//   });
// });

// describe('deleting slide object test', () => {
//   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
//   app.slides[0].objects.push(constructors.createImage('img.jpg', '100px', '100px', {x: 10, y: 10}));
//   let myMock = constructors.createId();

//   test('deleting slide object', () => {
//     let changedApp: AppType = cloneApp(app);
//     delete changedApp.slides[0].objects[0];
    
//     const result = methods.deleteSlideObject(app, myMock);
//     expect(result).toEqual(changedApp);
//   });
// });

// describe('deleting slide  test', () => {
//   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
//   let myMock = constructors.createId();

//   test('deleting slide', () => {
//     let changedApp: AppType = cloneApp(app);
//     delete changedApp.slides[0];
    
//     const result = methods.deleteSlide(app, myMock);
//     expect(result).toEqual(changedApp);
//   });
// });

// describe('deleting slide  test', () => {
//   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));

//   test('deleting slide', () => {
//     let changedApp: AppType = cloneApp(app);
//     changedApp.slides.push(constructors.createSlide());
    
//     const result = methods.addSlide(app);
//     expect(result).toEqual(changedApp);
//   });
// });