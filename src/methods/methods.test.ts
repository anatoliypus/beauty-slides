import * as methods from './methods';
import { AppType, SlideObject, TextObject } from '../model/model';
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

describe('changing underline style of text', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app = methods.addText(app);

  test('changing underline style', () => {
    const result = methods.toggleUnderlinedText(app, app.slides[0].objects[0].id);

    expect(result.slides[0].objects[0].type).toEqual('text');
    expect((result.slides[0].objects[0] as TextObject).fontDecoration).toEqual('underline');
   })
   
  test('changing underline style two times, so should be equal to initial', () => {
    const result1 = methods.toggleItalicText(app, app.slides[0].objects[0].id);
    const result2 = methods.toggleItalicText(result1, app.slides[0].objects[0].id);

    expect(result2.slides[0].objects[0].type).toEqual('text');
    expect((result2.slides[0].objects[0] as TextObject).fontDecoration).toEqual('unset');
  })
 });

describe('changing size of text test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app = methods.addText(app);

   test('changing size', () => {

     const result = methods.changeTextSize(app, app.slides[0].objects[0].id, '150px');
     expect(result.slides[0].objects[0].type).toEqual('text');
     expect((result.slides[0].objects[0] as TextObject).fontSize).toEqual('150');
   });

   test('changing size of unexisting object', () => {
     const result = methods.changeTextSize(app, '1', '150px');
     expect(result).toEqual(app);
   });
 });

 describe('changing slide bg test', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app = methods.addSlide(app);

   test('changing slide bg', () => {
    
     const result = methods.setSlideBg(app, app.slides[0].id, 'pepega.jpg');
     expect(result.slides[0].background).toEqual('pepega.jpg');
   });
   test('changing bg of unexisting slide', () => {
    
    const result = methods.setSlideBg(app, '1', 'pepega.jpg');
    expect(result.slides[0].background).toBeNull();
  });
 });

 describe('moving item', () => {
  let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
  app = methods.addImage(app, 'pepega.jpg');

   test('moving item', () => {

    const result = methods.moveItem(app, app.slides[0].objects[0].id, 12, 12);
     expect(result.slides[0].objects[0].type).toEqual('image');
     expect((result.slides[0].objects[0] as TextObject).positionTopLeft).toEqual({x: 12, y: 12});
   });
 });

describe('deleting and creating', () => {
   let app: AppType = constructors.createApp(constructors.createSettings('800px', '600px'));
   app = methods.addText(app);

   test('deleting slide object', () => {
    
     const result = methods.deleteSlideObject(app, app.slides[0].objects[0].id);

     expect(result.slides[0].objects[0]).toBeUndefined();
   });
   test('deleting slide', () => {
    
     const result = methods.deleteSlide(app, app.slides[0].id);

     expect(result.slides[0]).toBeUndefined();
  });
   test('adding slide', () => {
    
     const result = methods.addSlide(app);

     expect(result.slides[0]).toEqual(result.slides[0]);
  });
 });

