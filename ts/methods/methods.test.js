const methods = require('./methods');
const { app } = require('./testData');

const changedSlideApp = {
  ...app,
};
changedSlideApp.currSlideId = '1601835516025';

describe('changing slide method test', () => {
  test('changing slide', () => {
    expect(methods.changeSlide(app, '1601835516025')).toEqual(changedSlideApp);
  });
});
