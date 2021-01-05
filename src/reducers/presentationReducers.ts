import { AppType } from '../model/model';
import constructors from '../constructors/constructors';
import titleReducer from './titleReducer';
import currSlideIdReducer from './currSlideIdReducer';
import slidesReducer from './slidesReducer';
import choosedObjectReducer from './choosedObjectReducer';
import bufferedIdReducer from './bufferedIdReducer';

export const presentationReducers = (state: AppType = constructors.createApp(constructors.createSettings()), action: object): AppType => {
    return {
        name: titleReducer(state.name, action),
        currSlideId: currSlideIdReducer(state.currSlideId, action),
        slides: slidesReducer(state.slides, action, state.currSlideId, state.choosedObject),
        settings: state.settings,
        choosedObject: choosedObjectReducer(state.choosedObject, action),
        bufferedId: bufferedIdReducer(state.bufferedId, action, state.choosedObject)
    }
}