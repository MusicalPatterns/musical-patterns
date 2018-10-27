import { initialUi } from './state'
import { ImmutableUI, UiAction, UiActionType, UIStateKeys } from './types'

const uiReducer: (ui: ImmutableUI, action: UiAction) => ImmutableUI =
    (ui: ImmutableUI = initialUi, action: UiAction): ImmutableUI => {
        switch (action.type) {
            case UiActionType.SET_SUBMITTED_SONG_SPEC: {
                return ui.set(UIStateKeys.SUBMITTED_SONG_SPEC, action.data)
            }
            case UiActionType.SET_DISPLAYED_SONG_SPEC: {
                return ui.set(UIStateKeys.DISPLAYED_SONG_SPEC, action.data)
            }
            case UiActionType.SET_INVALID_SONG_SPEC_INPUTS: {
                return ui.set(UIStateKeys.INVALID_SONG_SPEC_INPUTS, action.data)
            }
            case UiActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS: {
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
