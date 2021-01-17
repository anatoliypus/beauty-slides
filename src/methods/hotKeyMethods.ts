import React from 'react';

export default function useHotKeys(
    deleteSlideObject: () => void,
    copyObject: () => void,
    pasteObject: () => void,
    deleteSlide: () => void,
    redo: () => void,
    undo: () => void
) {
    function undoHotKey(e: KeyboardEvent) {
        if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
            if (e.shiftKey) redo();
            else undo();
        }
    }

    function deleteHotKey(e: KeyboardEvent) {
        if (e.key === 'd' && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
            e.preventDefault();
            deleteSlideObject();
        }
    }

    function copyHotKey(e: KeyboardEvent) {
        if (e.key === 'c' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            copyObject();
        }
    }

    function pasteHotKey(e: KeyboardEvent) {
        if (e.key === 'v' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            pasteObject();
        }
    }

    function deleteSlideHotKey(e: KeyboardEvent) {
        if (e.key === 'd' && (e.metaKey || e.ctrlKey) && e.shiftKey) {
            e.preventDefault();
            deleteSlide();
        }
    }
    React.useEffect(() => {
        window.addEventListener('keydown', copyHotKey);
        window.addEventListener('keydown', pasteHotKey);
        window.addEventListener('keydown', deleteHotKey);
        window.addEventListener('keydown', undoHotKey);
        window.addEventListener('keydown', deleteSlideHotKey);
        return () => {
            window.removeEventListener('keydown', copyHotKey);
            window.removeEventListener('keydown', pasteHotKey);
            window.removeEventListener('keydown', deleteHotKey);
            window.removeEventListener('keydown', undoHotKey);
            window.removeEventListener('keydown', deleteSlideHotKey);
        };
    });
}
