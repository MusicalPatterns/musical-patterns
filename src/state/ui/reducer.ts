import { Action, ActionType } from '../actions'
import { initialUi } from './state'
import { ImmutableUI, UIStateKeys } from './types'

const uiReducer: (ui: ImmutableUI, action: Action) => ImmutableUI =
    (ui: ImmutableUI = initialUi, action: Action): ImmutableUI => {
        switch (action.type) {
            case ActionType.SET_SUBMITTED_SONG_SPEC: {
                return ui.set(UIStateKeys.SUBMITTED_SONG_SPEC, action.data)
            }
            case ActionType.SET_DISPLAYED_SONG_SPEC: {
                return ui.set(UIStateKeys.DISPLAYED_SONG_SPEC, action.data)
            }
            case ActionType.SET_INVALID_SONG_SPEC_INPUTS: {
                return ui.set(UIStateKeys.INVALID_SONG_SPEC_INPUTS, action.data)
            }
            case ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS: {
                return ui.set(UIStateKeys.UNSUBMITTED_SONG_SPEC_INPUTS, action.data)
            }
            default: {
                return ui
            }
        }
    }

export {
    uiReducer,
}
