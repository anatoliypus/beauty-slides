import * as methods from './methods';
import { AppType, SlideObject, TextObject } from '../model/model';
import constructors from '../constructors/constructors';

describe('changing slide test', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );

    test('changing slide', () => {
        const result = methods.changeSlide(app, '1602326146191');
        expect(result.currSlideId).toBe('1602326146191');
    });
});

describe('changing size of node test', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addImage(app, '1.jpg');

    test('changing size', () => {
        const result = methods.resizeNode(app, {
            id: app.slides[0].objects[0].id,
            width: '200px',
            height: '200px',
        });
        expect(result.slides[0].objects[0].width).toBe('200px');
        expect(result.slides[0].objects[0].height).toBe('200px');
    });

    test('changing size of unexisting object', () => {
        const result = methods.resizeNode(app, {
            id: '1',
            width: '200px',
            height: '200px',
        });
        expect(result).toEqual(app);
    });
});

describe('changing text weight', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addText(app);

    test('changing weight', () => {
        const result = methods.toggleBoldText(app, app.slides[0].objects[0].id);

        expect(result.slides[0].objects[0].type).toEqual('text');
        expect((result.slides[0].objects[0] as TextObject).fontWeight).toBe(
            700
        );
    });

    test('changing weight two times, so should be equal to initial', () => {
        const result1 = methods.toggleBoldText(
            app,
            app.slides[0].objects[0].id
        );
        const result2 = methods.toggleBoldText(
            result1,
            app.slides[0].objects[0].id
        );

        expect(result2.slides[0].objects[0].type).toEqual('text');
        expect((result2.slides[0].objects[0] as TextObject).fontWeight).toBe(
            400
        );
    });
});

describe('changing text italic style', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addText(app);

    test('changing italic style', () => {
        const result = methods.toggleItalicText(
            app,
            app.slides[0].objects[0].id
        );

        expect(result.slides[0].objects[0].type).toEqual('text');
        expect((result.slides[0].objects[0] as TextObject).fontStyle).toBe(
            'italic'
        );
    });

    test('changing style two times, so should be equal to initial', () => {
        const result1 = methods.toggleItalicText(
            app,
            app.slides[0].objects[0].id
        );
        const result2 = methods.toggleItalicText(
            result1,
            app.slides[0].objects[0].id
        );

        expect(result2.slides[0].objects[0].type).toEqual('text');
        expect((result2.slides[0].objects[0] as TextObject).fontStyle).toBe(
            'unset'
        );
    });
});

describe('changing underline style of text', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addText(app);

    test('changing underline style', () => {
        const result = methods.toggleUnderlinedText(
            app,
            app.slides[0].objects[0].id
        );

        expect(result.slides[0].objects[0].type).toEqual('text');
        expect((result.slides[0].objects[0] as TextObject).fontDecoration).toBe(
            'underline'
        );
    });

    test('changing underline style two times, so should be equal to initial', () => {
        const result1 = methods.toggleItalicText(
            app,
            app.slides[0].objects[0].id
        );
        const result2 = methods.toggleItalicText(
            result1,
            app.slides[0].objects[0].id
        );

        expect(result2.slides[0].objects[0].type).toEqual('text');
        expect(
            (result2.slides[0].objects[0] as TextObject).fontDecoration
        ).toBe('unset');
    });
});

describe('changing size of text test', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addText(app);

    test('changing size', () => {
        const result = methods.changeTextSize(app, {
            id: app.slides[0].objects[0].id,
            size: '150px',
        });
        expect(result.slides[0].objects[0].type).toEqual('text');
        expect((result.slides[0].objects[0] as TextObject).fontSize).toBe(
            '150px'
        );
    });

    test('changing size of unexisting object', () => {
        const result = methods.changeTextSize(app, { id: '1', size: '150px' });
        expect(result).toEqual(app);
    });
});

describe('changing slide bg test', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addSlide(app);

    test('changing slide bg', () => {
        const result = methods.setSlideBg(app, 'pepega.jpg');
        expect(result.slides[0].background).toBe('pepega.jpg');
    });
});

describe('moving item', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addImage(app, 'pepega.jpg');

    test('moving item', () => {
        const result = methods.moveItem(app, {
            id: app.slides[0].objects[0].id,
            x: 12,
            y: 12,
        });
        expect(result.slides[0].objects[0].type).toBe('img');
        expect(
            (result.slides[0].objects[0] as TextObject).positionTopLeft
        ).toEqual({ x: 12, y: 12 });
    });
});

describe('deleting slides and objects', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    app = methods.addText(app);

    test('deleting slide object', () => {
        const result = methods.deleteSlideObject(
            app,
            app.slides[0].objects[0].id
        );

        expect(result.slides[0].objects[0]).toBeUndefined();
    });
    test('deleting slide', () => {
        const result = methods.deleteSlide(app);

        expect(result.slides[0]).toBeUndefined();
        expect(result.currSlideId).toBeNull();
    });
});

test('changing presentation name test', () => {
    let app: AppType = constructors.createApp(
        constructors.createSettings('800px', '600px')
    );
    const result = methods.changePresentationName(app, 'New name');
    expect(result.name).toBe('New name');
});

constructors.createId = jest.fn().mockReturnValue('1');

describe('adding objects', () => {
    test('adding slide', () => {
        let app: AppType = constructors.createApp(
            constructors.createSettings('800px', '600px')
        );

        let result = methods.deleteSlide(app);
        result = methods.addSlide(app);

        expect(result.slides[0]).toEqual(constructors.createSlide());
        expect(result.currSlideId).toBe(result.slides[0].id);
    });

    test('adding image', () => {
        let app: AppType = constructors.createApp(
            constructors.createSettings('800px', '600px')
        );
        const result = methods.addImage(app, '1.jpg');

        expect(result.slides[0].objects[0]).toEqual(
            constructors.createImage('1.jpg')
        );
    });

    test('adding text', () => {
        let app: AppType = constructors.createApp(
            constructors.createSettings('800px', '600px')
        );
        const result = methods.addText(app);

        expect(result.slides[0].objects[0]).toEqual(constructors.createText());
    });

    test('adding figure - circle', () => {
        let app: AppType = constructors.createApp(
            constructors.createSettings('800px', '600px')
        );
        const result = methods.addFigure(app, 'circle');

        expect(result.slides[0].objects[0]).toEqual(
            constructors.createFigure('circle')
        );
    });

    test('adding figure - rectangle', () => {
        let app: AppType = constructors.createApp(
            constructors.createSettings('800px', '600px')
        );
        const result = methods.addFigure(app, 'rectangle');

        expect(result.slides[0].objects[0]).toEqual(
            constructors.createFigure('rectangle')
        );
    });

    test('adding figure - triangle', () => {
        let app: AppType = constructors.createApp(
            constructors.createSettings('800px', '600px')
        );
        const result = methods.addFigure(app, 'triangle');

        expect(result.slides[0].objects[0]).toEqual(
            constructors.createFigure('triangle')
        );
    });
});