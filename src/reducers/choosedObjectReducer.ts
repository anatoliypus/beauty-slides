import { choosedObjectType } from '../model/model';

export default function choosedObjectReducer(state: choosedObjectType = {id: null, type: null}, action: any): choosedObjectType {
    if (action.type === 'CHANGE_SELECTED_OBJECT') {
        return {
            id: action.id,
            type: action.objType
        }
    }
    return state
}