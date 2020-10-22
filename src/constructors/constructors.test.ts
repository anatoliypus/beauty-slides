import { create } from 'domain';
import constructors from './constructors';

test('settings creating test', () => {
  const settings = constructors.createSettings('800px', '600px');

  expect(settings.slideHeight).toBe('600px');
  expect(settings.slideWidth).toBe('800px');
}); 

test('app creating test', () => {
  constructors.createId = jest.fn().mockReturnValue('1');
  const settings = constructors.createSettings('800px', '600px');
  const app = constructors.createApp(settings);

  console.dir(app.slides);
  console.dir(constructors.createSlide());

  expect(app.name).toBe('Название презентации');
  expect(app.currSlideId).toBe(app.slides[0].id);
  expect(app.choosedObjectId).toBeNull();
  expect(app.slides[0]).toEqual(constructors.createSlide());
});