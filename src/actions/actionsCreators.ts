import { FigureType, NodeType } from "../model/model";

export interface changeSlideActionType {
    type: 'CHANGE_SLIDE';
    id: string;
}
export function changeSlide(id: string): changeSlideActionType {
    return {
        type: 'CHANGE_SLIDE',
        id
    }
}

export interface changeSelectedObjectActionType {
    type: 'CHANGE_SELECTED_OBJECT';
    id: string;
    objType: NodeType | null
}
export function changeSelectedObject(id: string, objType: NodeType): changeSelectedObjectActionType {
    return {
        type: 'CHANGE_SELECTED_OBJECT',
        id,
        objType
    }
}


export interface copyObjectActionType {
    type: 'COPY_OBJECT';
}
export function copyObject(): copyObjectActionType {
    return {
        type: 'COPY_OBJECT'
    }
}

export interface pasteObjectActionType {
    type: 'PASTE_OBJECT';
}
export function pasteObject(): pasteObjectActionType {
    return {
        type: 'PASTE_OBJECT'
    }
}

export interface strokeResizeActionType {
    type: 'RESIZE_FIGURE_STROKE';
    strokeWidth: number;
}
export function strokeResize(strokeWidth: number): strokeResizeActionType {
    return {
        type: 'RESIZE_FIGURE_STROKE',
        strokeWidth
    }
}

export interface changeRectBorderRadiusActionType {
    type: 'CHANGE_FIGURE_BORDER_RADIUS';
    newRadius: number;
}
export function changeRectBorderRadius(newRadius: number): changeRectBorderRadiusActionType {
    return {
        type: 'CHANGE_FIGURE_BORDER_RADIUS',
        newRadius
    }
}

export interface strokeColorSetActionType {
    type: 'CHANGE_FIGURE_STROKE_COLOR';
    newColor: number;
}
export function strokeColorSet(newColor: number): strokeColorSetActionType {
    return {
        type: 'CHANGE_FIGURE_STROKE_COLOR',
        newColor
    }
}

export interface figureBackgroundSetActionType {
    type: 'CHANGE_FIGURE_BACKGROUND';
    newColor: number;
}
export function figureBackgroundSet(newColor: number): figureBackgroundSetActionType {
    return {
        type: 'CHANGE_FIGURE_BACKGROUND',
        newColor
    }
}

export interface resizeNodeActionType {
    type: 'RESIZE_NODE';
    width: string;
    height: string;
}
export function resizeNode(width: string, height: string): resizeNodeActionType {
    return {
        type: 'RESIZE_NODE',
        width,
        height
    }
}

export interface toggleBoldTextActionType {
    type: 'TOGGLE_BOLD_TEXT'
}
export function toggleBoldText(): toggleBoldTextActionType {
    return {
        type: 'TOGGLE_BOLD_TEXT'
    }
}

export interface toggleItalicTextActionType {
    type: 'TOGGLE_ITALIC_TEXT'
}
export function toggleItalicText(): toggleItalicTextActionType {
    return {
        type: 'TOGGLE_ITALIC_TEXT'
    }
}

export interface toggleUnderlinedTextActionType {
    type: 'TOGGLE_UNDERLINED_TEXT'
}
export function toggleUnderlinedText(): toggleUnderlinedTextActionType {
    return {
        type: 'TOGGLE_UNDERLINED_TEXT'
    }
}

export interface changeTextAlignmentActionType {
    type: 'CHANGE_TEXT_ALIGNMENT';
    alignment: 'right' | 'center' | 'left';
}
export function changeTextAlignment(alignment: 'right' | 'center' | 'left'): changeTextAlignmentActionType {
    return {
        type: 'CHANGE_TEXT_ALIGNMENT',
        alignment
    }
}

/////////////////////////////////////////////////////////////////////////////

export function changeTextFontFamily(family: string) {
    return {
        type: 'CHANGE_TEXT_FONT_FAMILY',
        family
    }
}

export function changeTextFontSize(size: string) {
    return {
        type: 'CHANGE_TEXT_FONT_SIZE',
        size
    }
}

export function changeTextColor(color: string) {
    return {
        type: 'CHANGE_TEXT_COLOR',
        color
    }
}

export function changeTextData(data: string) {
    return {
        type: 'CHANGE_TEXT_DATA',
        data
    }
}

export function setSlideBg(bg: string) {
    return {
        type: 'SET_SLIDE_BG',
        bg
    }
}

export function moveItem(x: number, y: number) {
    return {
        type: 'MOVE_SLIDE_NODE',
        x,
        y
    }
}
export function decreaseZIndex() {
    return {
        type: 'DECREASE_Z_INDEX'
    }
}

export function chengePresentationName(name: string) {
    return {
        type: 'CHANGE_PRESENTATION_NAME',
        name
    }
}

export function addSlide() {
    return {
        type: 'ADD_SLIDE',
    }
}

export function addFigure(type: FigureType) {
    return {
        type: 'ADD_FIGURE',
        figureType: type
    }
}

export function addText() {
    return {
        type: 'ADD_TEXT',
    }
}

export function addImage(path: string) {
    return {
        type: 'ADD_IMAGE',
        path
    }
}

export function deleteSlide() {
    return {
        type: 'DELETE_SLIDE',
    }
}

export function deleteSlideObject() {
    return {
        type: 'DELETE_SLIDE_OBJECT',
    }
}

export function increaseZIndex() {
    return {
        type: 'INCREASE_ZINDEX',
    }
}