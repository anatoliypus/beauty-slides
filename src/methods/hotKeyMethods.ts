import { deleteSlideObject, copyObject, pasteObject, deleteSlide, redo, undo } from '../actions/actionsCreators';
import { store } from '../index';

export function undoHotKey(e: KeyboardEvent) {
    if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
        if (e.shiftKey) store.dispatch(redo());
        else store.dispatch(undo());
    }
}

export function deleteHotKey(e: KeyboardEvent) {
    if (e.key === 'd' && (e.metaKey || e.ctrlKey) && (! e.shiftKey)) {
        e.preventDefault();
        store.dispatch(deleteSlideObject());
    }
}

export function copyHotKey(e: KeyboardEvent) {
    if (e.key === 'c' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        store.dispatch(copyObject());
    }
}

export function pasteHotKey(e: KeyboardEvent) {
    if (e.key === 'v' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        store.dispatch(pasteObject());
    }
}

export function deleteSlideHotKey(e: KeyboardEvent) {
    if (e.key === 'd' && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        alert(1);
        e.preventDefault();
        store.dispatch(deleteSlide());
    }
}