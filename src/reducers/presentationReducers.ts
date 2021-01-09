import { AppType, History } from '../model/model';
import constructors from '../constructors/constructors';
import titleReducer from './titleReducer';
import currSlideIdReducer from './currSlideIdReducer';
import slidesReducer from './slidesReducer';
import choosedObjectReducer from './choosedObjectReducer';
import bufferedIdReducer from './bufferedIdReducer';
import { exportApp } from '../methods/jsonMethods';
import { actionType } from '../actions/actionsCreators';
import { exportPDF } from '../methods/exportPdfMethods';
import { init } from "../index";
import { cloneApp } from '../methods/newSecondaryMethods';

function undo(state: AppType): void {
    if (undoStack.length && state) {
        redoStack.push(cloneApp(state));
        state = undoStack[undoStack.length - 1];
        undoStack.splice(undoStack.length - 1);
        init(state);
    }
}

function redo(state: AppType): void {
    if (redoStack.length && state) {
        undoStack.push(cloneApp(state));
        state = redoStack[redoStack.length - 1];
        redoStack.splice(redoStack.length - 1);
        init(state);
    }
}


const undoStack: History = [];
const redoStack: History = [];

export default function presentationReducers(state: AppType = constructors.createApp(constructors.createSettings()), action: actionType): AppType {
    if (action.type === 'EXPORT_APP') {
        exportApp(state);
    } else if (action.type === 'EXPORT_PDF') {
        exportPDF(state);
    } else if (action.type === 'REDO') {
        redo(state);
    } else if (action.type === 'UNDO') {
        undo(state);
    } else undoStack.push(state);
    return {
        name: titleReducer(state.name, action),
        currSlideId: currSlideIdReducer(state.currSlideId, action),
        slides: slidesReducer(state.slides, action, state.currSlideId, state.choosedObject, state.bufferedId),
        settings: state.settings,
        choosedObject: choosedObjectReducer(state.choosedObject, action),
        bufferedId: bufferedIdReducer(state.bufferedId, action, state.choosedObject, state.currSlideId)
    }
}