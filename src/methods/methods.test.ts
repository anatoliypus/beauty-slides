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
        const result = methods.resizeNode(
            app,
            app.slides[0].objects[0].id,
            '200px',
            '200px'
        );
        expect(result.slides[0].objects[0].width).toBe('200px');
        expect(result.slides[0].objects[0].height).toBe('200px');
    });

    test('changing size of unexisting object', () => {
        const result = methods.resizeNode(app, '1', '200px', '200px');
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
        const result = methods.changeTextSize(
            app,
            app.slides[0].objects[0].id,
            '150px'
        );
        expect(result.slides[0].objects[0].type).toEqual('text');
        expect((result.slides[0].objects[0] as TextObject).fontSize).toBe(
            '150px'
        );
    });

    test('changing size of unexisting object', () => {
        const result = methods.changeTextSize(app, '1', '150px');
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
        const result = methods.moveItem(
            app,
            app.slides[0].objects[0].id,
            12,
            12
        );
        expect(result.slides[0].objects[0].type).toBe('img');
        expect(
            (result.slides[0].objects[0] as TextObject).positionTopLeft
        ).toEqual({ x: 12, y: 12 });
    });
});

describe('deleting and creating', () => {
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
    });
    test('adding slide', () => {
        const result = methods.addSlide(app);

        expect(result.slides[0]).toBe(result.slides[0]);
    });
});
