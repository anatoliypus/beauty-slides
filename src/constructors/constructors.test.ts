import { create } from 'domain';
import constructors from './constructors';

constructors.createId = jest.fn().mockReturnValue('1');

test('slide creating test', () => {
    const newSlide = constructors.createSlide();

    expect(newSlide.background).toBeNull();
    expect(newSlide.objects).toEqual([]);
});

test('settings creating test', () => {
    const settings = constructors.createSettings('800px', '600px');

    expect(settings.slideHeight).toBe('600px');
    expect(settings.slideWidth).toBe('800px');
});

test('app creating test', () => {
    const settings = constructors.createSettings('800px', '600px');
    const app = constructors.createApp(settings);

    expect(app.name).toBe('Название презентации');
    expect(app.currSlideId).toBe(app.slides[0].id);
    expect(app.choosedObjectId).toBeNull();
    expect(app.slides[0]).toEqual(constructors.createSlide());
    expect(app.settings).toEqual(settings);
});

test('image creating test', () => {
    const image = constructors.createImage('1.jpg');

    expect(image.height).toBe('150px');
    expect(image.width).toBe('150px');
    expect(image.path).toBe('1.jpg');
    expect(image.positionTopLeft).toEqual({ x: 20, y: 20 });
    expect(image.type).toBe('img');
});

test('text creating test', () => {
    const text = constructors.createText();

    expect(text.type).toBe('text');
    expect(text.data).toBe('Введите текст');
    expect(text.fontDecoration).toBe('unset');
    expect(text.fontFamily).toBe('Open Sans');
    expect(text.fontSize).toBe('15px');
    expect(text.color).toBe('#000');
    expect(text.fontStyle).toBe('unset');
    expect(text.height).toBe('50px');
    expect(text.width).toBe('100px');
    expect(text.positionTopLeft).toEqual({ x: 20, y: 20 });
    expect(text.fontWeight).toBe(400);
});

describe('figures creating tests', () => {
    test('circle creating test', () => {
        const figure = constructors.createFigure('circle');
    
        expect(figure.type).toBe('figure');
        expect(figure.figure).toBe('circle');
        expect(figure.width).toBe('150px');
        expect(figure.height).toBe('150px');
        expect(figure.positionTopLeft.x).toBe(20);
        expect(figure.positionTopLeft.y).toBe(20);
    });

    test('triangle creating test', () => {
        const figure = constructors.createFigure('triangle');
    
        expect(figure.type).toBe('figure');
        expect(figure.figure).toBe('triangle');
        expect(figure.width).toBe('150px');
        expect(figure.height).toBe('150px');
        expect(figure.positionTopLeft.x).toBe(20);
        expect(figure.positionTopLeft.y).toBe(20);
    });

    test('rectangle creating test', () => {
        const figure = constructors.createFigure('rectangle');
    
        expect(figure.type).toBe('figure');
        expect(figure.figure).toBe('rectangle');
        expect(figure.width).toBe('150px');
        expect(figure.height).toBe('150px');
        expect(figure.positionTopLeft.x).toBe(20);
        expect(figure.positionTopLeft.y).toBe(20);
    });
})
