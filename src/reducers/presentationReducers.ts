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
import usedColorsReducer from './usedColorsReducer';

function undo(): void {
    // do not forget about cloneApp
}

function redo(state: AppType): void {
    // do not forget about cloneApp
}


const undoStack: History = [];
const redoStack: History = [];

export default function presentationReducers(state: AppType = constructors.createApp(constructors.createSettings()), action: actionType): AppType {
    // console.log('call reducers', action);
    const newState = {
        name: titleReducer(state.name, action),
        currSlideId: currSlideIdReducer(state.currSlideId, action),
        slides: slidesReducer(state.slides, action, state.currSlideId, state.choosedObject, state.bufferedId),
        settings: state.settings,
        choosedObject: choosedObjectReducer(state.choosedObject, action),
        bufferedId: bufferedIdReducer(state.bufferedId, action, state.choosedObject, state.currSlideId),
        usedColors: usedColorsReducer(state.usedColors, action)
    }
    if (action.type === 'EXPORT_APP') {
        exportApp(state);
    } else if (action.type === 'EXPORT_PDF') {
        exportPDF(state);
    } else if (action.type === 'REDO') {
        
    } else if (action.type === 'UNDO') {
        
    } else if (action.type.indexOf('@@redux/INIT') === -1 || ! undoStack.length) {
        
    } 
    window.localStorage.setItem('app', JSON.stringify(newState));
    return newState
}