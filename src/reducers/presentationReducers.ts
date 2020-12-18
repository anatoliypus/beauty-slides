import { AppType } from '../model/model';
import constructors from '../constructors/constructors';

export const presentationReducers = (state: AppType = constructors.createApp(constructors.createSettings('1000px', '800px')), action: object) => {
    return {
        // name: titleReducer(state.name, action)
    }
}