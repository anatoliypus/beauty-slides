import { actionType } from "../actions/actionsCreators";

export default function usedColorsReducer(state: Array<string> = [], action: actionType) {
    if (action.type === 'SET_SLIDE_BG' || action.type === 'CHANGE_TEXT_COLOR' || action.type === 'CHANGE_FIGURE_STROKE_COLOR' || action.type === 'CHANGE_FIGURE_BACKGROUND') {
        if (state.indexOf(action.color) === -1) return state.concat([action.color]);
    }
    return state;
}