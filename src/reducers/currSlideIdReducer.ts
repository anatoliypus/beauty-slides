export default function currSlideIdReducer(state: string | null = null, action: any): string | null {
    if (action.type === 'CHANGE_SLIDE') {
        return action.id
    } else if (action.type === 'DELETE_SLIDE') {
        return null;
    }
    return state
}