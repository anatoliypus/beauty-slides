import { choosedObjectType, SlideType } from '../model/model';

export default function slidesReducer(
    state: Array<SlideType> = [],
    action: any,
    currSlideId: string | null,
    choosedObject: choosedObjectType
): Array<SlideType> {
    if (action.type === 'SET_SLIDE_BG') {
        return action.bg;
    } else if (action.type === 'MOVE_SLIDE_NODE') {
        return action.x, action.y;
    } else if (action.type === 'ADD_SLIDE') {
        return state;
    } else if (action.type === 'ADD_FIGURE') {
        return state;
    } else if (action.type === 'ADD_TEXT') {
        return state;
    } else if (action.type === 'ADD_IMAGE') {
        return state;
    } else if (action.type === 'DELETE_SLIDE') {
        return state;
    } else if (action.type === 'DELETE_SLIDE_OBJECT') {
        return state;
    } else if (action.type === 'INCREASE_ZINDEX') {
        return state;
    } else if (action.type === 'DECREASE_Z_INDEX') {
        return state;
    } else if (action.type === 'CHANGE_TEXT_DATA') {
        return action.data;
    } else if (action.type === 'CHANGE_TEXT_COLOR') {
        return action.color;
    } else if (action.type === 'CHANGE_TEXT_FONT_SIZE') {
        return action.fontSize;
    } else if (action.type === 'CHANGE_TEXT_FONT_FAMILY') {
        return action.fontFamily;
    } else if (action.type === 'CHANGE_TEXT_ALIGNMENT') {
        return action.alignment;
    } else if (action.type === 'TOGGLE_UNDERLINED_TEXT') {
        return state;
    } else if (action.type === 'TOGGLE_ITALIC_TEXT') {
        return state;
    } else if (action.type === 'TOGGLE_BOLD_TEXT') {
        return state;
    } else if (action.type === 'RESIZE_NODE') {
        return state;
    } else if (action.type === 'CHANGE_FIGURE_BACKGROUND') {
        return action.newColor;
    } else if (action.type === 'CHANGE_FIGURE_STROKE_COLOR') {
        return action.newColor;
    } else if (action.type === 'CHANGE_FIGURE_BORDER_RADIUS') {
        return action.newRadius;
    } else if (action.type === 'RESIZE_FIGURE_STROKE') {
        return action.strokeWidth;
    } else return state;
}
