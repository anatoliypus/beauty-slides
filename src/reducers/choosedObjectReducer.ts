import { actionType } from '../actions/actionsCreators';
import { choosedObjectType } from '../model/model';

export default function choosedObjectReducer(
    state: choosedObjectType = { id: null, type: null },
    action: actionType
): choosedObjectType {
    if (action.type === 'CHANGE_SELECTED_OBJECT') {
        return {
            id: action.id,
            type: action.objType,
        };
    } else if (
        action.type === 'CHANGE_SLIDE' ||
        action.type === 'DELETE_SLIDE_OBJECT' ||
        action.type === 'CUT_SLIDE_NODE' ||
        action.type === 'ADD_SLIDE'
    ) {
        return {
            id: null,
            type: null,
        };
    }
    return state;
}
