import { actionType } from '../actions/actionsCreators';
import { choosedObjectType } from '../model/model';

export default function bufferedIdReducer(state: string | null = null, action: actionType, choosedObject: choosedObjectType, currSlideId: string | null): string | null {
    if (action.type === 'COPY_OBJECT') {
        if (choosedObject.id) return choosedObject.id;
        return currSlideId;
    }
    return state
}