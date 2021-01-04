export default function titleReducer(state: string = 'presentation.', action: any): string {
    if (action.type === 'CHANGE_PRESENTATION_NAME') {
        return action.name
    }
    return state
}