import { actionType } from "../actions/actionsCreators";

export default function currSlideIdReducer(state: string | null = null, action: actionType): string | null {
    if (action.type === 'CHANGE_SLIDE') {
        return action.id
    }
    return state
}