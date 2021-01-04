import { choosedObjectType } from '../model/model';

export default function bufferedIdReducer(state: string | null = null, action: any, choosedObject: choosedObjectType): string | null {
    if (action.type === 'COPY_OBJECT') {
        return choosedObject.id
    }
    return state
}