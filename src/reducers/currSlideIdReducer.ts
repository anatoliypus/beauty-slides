export default function currSlideIdReducer(state: string | null = null, action: any) {
    if (action.type === 'CHANGE_SLIDE') {
        return action.id
    }
    return state
}