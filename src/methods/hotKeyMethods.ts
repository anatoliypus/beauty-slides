import React from 'react';

export default function useHotKeys(
    deleteSlideObject: () => void,
    copyObject: () => void,
    pasteObject: () => void,
    cutObject: () => void,
    deleteSlide: () => void,
    redo: () => void,
    undo: () => void
) {
    function undoHotKey(e: KeyboardEvent) {
        if (e.key === 'z' && (e.metaKey || e.ctrlKey) && e.shiftKey) {
            redo();
        }
        if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
            undo();
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

    function cutHotKey(e: KeyboardEvent) {
        if (e.key === 'x' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            cutObject();
        }
    }

    function pasteHotKey(e: KeyboardEvent) {
        if (e.key === 'v' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            pasteObject();
        }
    }

    function deleteSlideHotKey(e: KeyboardEvent) {
        if (e.key === 'f' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            deleteSlide();
        }
    }
    React.useEffect(() => {
        window.addEventListener('keydown', copyHotKey);
        window.addEventListener('keydown', cutHotKey);
        window.addEventListener('keydown', pasteHotKey);
        window.addEventListener('keydown', deleteHotKey);
        window.addEventListener('keydown', undoHotKey);
        window.addEventListener('keydown', deleteSlideHotKey);
        return () => {
            window.removeEventListener('keydown', copyHotKey);
            window.removeEventListener('keydown', cutHotKey);
            window.removeEventListener('keydown', pasteHotKey);
            window.removeEventListener('keydown', deleteHotKey);
            window.removeEventListener('keydown', undoHotKey);
            window.removeEventListener('keydown', deleteSlideHotKey);
        };
    });
}
