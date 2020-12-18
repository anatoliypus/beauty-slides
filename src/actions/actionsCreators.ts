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