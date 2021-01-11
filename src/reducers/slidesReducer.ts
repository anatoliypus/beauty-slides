import { pasteObject } from '../methods/slidesMethods';
import {
    addFigure,
    addImage,
    addSlide,
    addText,
    changeAlignment,
    changeRectBorderRadius,
    changeText,
    changeTextColor,
    changeTextFontFamily,
    changeTextSize,
    decreaseZIndex,
    deleteSlide,
    deleteSlideObject,
    figureBackgroundSet,
    increaseZIndex,
    moveItem,
    resizeNode,
    setSlideBg,
    strokeColorSet,
    strokeResize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText,
    changeSlideOrder
} from '../methods/slidesMethods';
import { choosedObjectType, SlideType } from '../model/model';
import { actionType } from '../actions/actionsCreators';

export default function slidesReducer(
    state: Array<SlideType> = [],
    action: actionType,
    currSlideId: string | null,
    choosedObject: choosedObjectType,
    bufferedId: string | null
): Array<SlideType> {
    if (!currSlideId) throw new Error();
    if (action.type === 'SET_SLIDE_BG') {
        return setSlideBg(state, currSlideId, action.color);
    } else if (action.type === 'PASTE_OBJECT') {
        return pasteObject(state, bufferedId);
    } else if (action.type === 'MOVE_SLIDE_NODE') {
        return moveItem(state, currSlideId, choosedObject, action.x, action.y);
    } else if (action.type === 'ADD_SLIDE') {
        return addSlide(state);
    } else if (action.type === 'ADD_FIGURE') {
        return addFigure(state, currSlideId, action.figureType);
    } else if (action.type === 'ADD_TEXT') {
        return addText(state, currSlideId);
    } else if (action.type === 'ADD_IMAGE') {
        return addImage(state, currSlideId, action.path);
    } else if (action.type === 'DELETE_SLIDE') {
        return deleteSlide(state, currSlideId);
    } else if (action.type === 'DELETE_SLIDE_OBJECT') {
        return deleteSlideObject(state, currSlideId, choosedObject);
    } else if (action.type === 'INCREASE_ZINDEX') {
        return increaseZIndex(state, currSlideId, choosedObject);
    } else if (action.type === 'DECREASE_Z_INDEX') {
        return decreaseZIndex(state, currSlideId, choosedObject);
    } else if (action.type === 'CHANGE_TEXT_DATA') {
        return changeText(state, currSlideId, choosedObject, action.data);
    } else if (action.type === 'CHANGE_TEXT_COLOR') {
        return changeTextColor(state, currSlideId, choosedObject, action.color);
    } else if (action.type === 'CHANGE_TEXT_FONT_SIZE') {
        return changeTextSize(state, currSlideId, choosedObject, action.size);
    } else if (action.type === 'CHANGE_TEXT_FONT_FAMILY') {
        return changeTextFontFamily(
            state,
            currSlideId,
            choosedObject,
            action.family
        );
    } else if (action.type === 'CHANGE_TEXT_ALIGNMENT') {
        return changeAlignment(
            state,
            currSlideId,
            choosedObject,
            action.alignment
        );
    } else if (action.type === 'TOGGLE_UNDERLINED_TEXT') {
        return toggleUnderlinedText(state, currSlideId, choosedObject);
    } else if (action.type === 'TOGGLE_ITALIC_TEXT') {
        return toggleItalicText(state, currSlideId, choosedObject);
    } else if (action.type === 'TOGGLE_BOLD_TEXT') {
        return toggleBoldText(state, currSlideId, choosedObject);
    } else if (action.type === 'RESIZE_NODE') {
        return resizeNode(
            state,
            currSlideId,
            choosedObject,
            action.width,
            action.height
        );
    } else if (action.type === 'CHANGE_FIGURE_BACKGROUND') {
        return figureBackgroundSet(
            state,
            currSlideId,
            choosedObject,
            action.color
        );
    } else if (action.type === 'CHANGE_FIGURE_STROKE_COLOR') {
        return strokeColorSet(
            state,
            currSlideId,
            choosedObject,
            action.color
        );
    } else if (action.type === 'CHANGE_FIGURE_BORDER_RADIUS') {
        return changeRectBorderRadius(
            state,
            currSlideId,
            choosedObject,
            action.newRadius
        );
    } else if (action.type === 'RESIZE_FIGURE_STROKE') {
        return strokeResize(
            state,
            currSlideId,
            choosedObject,
            action.strokeWidth
        );
    } else if (action.type === 'CHANGE_SLIDE_ORDER') {
        return changeSlideOrder(state, action.slideId, action.slideAfterId);
    } else return state;
}
