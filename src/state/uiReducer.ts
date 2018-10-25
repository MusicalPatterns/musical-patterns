import { Action, ActionType } from './actions'
import { ImmutableUI, initialUi } from './uiState'

const uiReducer: (ui: ImmutableUI, action: Action) => ImmutableUI =
    (ui: ImmutableUI = initialUi, action: Action): ImmutableUI => {
        switch (action.type) {
            case ActionType.SET_SUBMITTED_SONG_SPEC: {
                return ui.set('submittedSongSpec', action.data)
            }
            case ActionType.SET_DISPLAYED_SONG_SPEC: {
                return ui.set('displayedSongSpec', action.data)
            }
            case ActionType.SET_INVALID_SONG_SPEC_INPUTS: {
                return ui.set('invalidSongSpecInputs', action.data)
            }
            case ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS: {
                return ui.set('unsubmittedSongSpecInputs', action.data)
            }
            default: {
                return ui
            }
        }
    }

export {
    uiReducer,
}
