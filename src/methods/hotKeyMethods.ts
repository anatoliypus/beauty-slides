import { dispatch, redo, undo } from '../dispatcher';
import { deleteSlideObject, copyObject, pasteObject, deleteSlide } from './methods';

export function undoHotKey(e: KeyboardEvent) {
    if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
        if (e.shiftKey) redo();
        else undo();
    }
}

export function deleteHotKey(e: KeyboardEvent) {
    if (e.key === 'd' && (e.metaKey || e.ctrlKey) && (! e.shiftKey)) {
        e.preventDefault();
        dispatch(deleteSlideObject);
    }
}

export function copyHotKey(e: KeyboardEvent) {
    if (e.key === 'c' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dispatch(copyObject);
    }
}

export function pasteHotKey(e: KeyboardEvent) {
    if (e.key === 'v' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dispatch(pasteObject);
    }
}

export function deleteSlideHotKey(e: KeyboardEvent) {
    if (e.key === 'd' && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        dispatch(deleteSlide);
    }
}