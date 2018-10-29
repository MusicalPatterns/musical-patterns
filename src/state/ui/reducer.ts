import { initialUi } from './state'
import { ImmutableUi, UiAction, UiActionType, UiStateKeys } from './types'

const uiReducer: (ui: ImmutableUi, action: UiAction) => ImmutableUi =
    (ui: ImmutableUi = initialUi, action: UiAction): ImmutableUi => {
        switch (action.type) {
            case UiActionType.SET_SUBMITTED_SONG_SPEC: {
                return ui.set(UiStateKeys.SUBMITTED_SONG_SPEC, action.data)
            }
            case UiActionType.SET_DISPLAYED_SONG_SPEC: {
                return ui.set(UiStateKeys.DISPLAYED_SONG_SPEC, action.data)
            }
            case UiActionType.SET_INVALID_SONG_SPEC_INPUTS: {
                return ui.set(UiStateKeys.INVALID_SONG_SPEC_INPUTS, action.data)
            }
            case UiActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS: {
                return ui.set(UiStateKeys.UNSUBMITTED_SONG_SPEC_INPUTS, action.data)
            }
            default: {
                return ui
            }
        }
    }

export {
    uiReducer,
}
