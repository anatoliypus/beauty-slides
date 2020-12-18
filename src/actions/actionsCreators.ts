export function changeSlide(id: string) {
    return {
        type: 'CHANGE_SLIDE',
        id
    }
}

export function changeSelectedObject(id: string) {
    return {
        type: 'CHANGE_SELECTED_OBJECT',
        id
    }
}

export function copyObject() {
    return {
        type: 'COPY_OBJECT'
    }
}

export function pasteObject() {
    return {
        type: 'PASTE_OBJECT'
    }
}

export function strokeResize(strokeWidth: number) {
    return {
        type: 'RESIZE_FIGURE_STROKE',
        strokeWidth
    }
}

export function changeRectBorderRadius(newRadius: number) {
    return {
        type: 'CHANGE_FIGURE_BORDER_RADIUS',
        newRadius
    }
}

export function strokeColorSet(newColor: number) {
    return {
        type: 'CHANGE_FIGURE_STROKE_COLOR',
        newColor
    }
}

export function figureBackgroundSet(newColor: number) {
    return {
        type: 'CHANGE_FIGURE_BACKGROUND',
        newColor
    }
}

export function resizeNode(width: number, height: number) {
    return {
        type: 'RESIZE_NODE',
        width,
        height
    }
}

export function toggleBoldText() {
    return {
        type: 'TOGGLE_BOLD_TEXT'
    }
}

export function toggleItalicText() {
    return {
        type: 'TOGGLE_ITALIC_TEXT'
    }
}

export function toggleUnderlinedText() {
    return {
        type: 'TOGGLE_UNDERLINED_TEXT'
    }
}

export function changeTextAlignment(alignment: 'right' | 'center' | 'left') {
    return {
        type: 'CHANGE_TEXT_ALIGNMENT',
        alignment
    }
}

export function changeTextFontFamily(fontFamily: string) {
    return {
        type: 'CHANGE_TEXT_FONT_FAMILY',
        fontFamily
    }
}

export function changeTextFontSize(fontSize: string) {
    return {
        type: 'CHANGE_TEXT_FONT_FAMILY',
        fontSize
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

export function addFigure() {
    return {
        type: 'ADD_FIGURE',
    }
}

export function addText() {
    return {
        type: 'ADD_TEXT',
    }
}

export function addImage() {
    return {
        type: 'ADD_IMAGE',
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