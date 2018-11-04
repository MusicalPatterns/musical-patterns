import { initialUi } from './state'
import { ImmutableUi, UiAction, UiActionType, UiStateKeys } from './types'

const uiReducer: (ui: ImmutableUi, action: UiAction) => ImmutableUi =
    (ui: ImmutableUi = initialUi, action: UiAction): ImmutableUi => {
        switch (action.type) {
            case UiActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS: {
                return ui.set(UiStateKeys.DISABLED_PATTERN_SPEC_BUTTONS, action.data)
            }
            case UiActionType.SET_SUBMITTED_PATTERN_SPEC: {
                return ui.set(UiStateKeys.SUBMITTED_PATTERN_SPEC, action.data)
            }
            case UiActionType.SET_DISPLAYED_PATTERN_SPEC: {
                return ui.set(UiStateKeys.DISPLAYED_PATTERN_SPEC, action.data)
            }
            case UiActionType.SET_INVALID_PATTERN_SPEC_INPUTS: {
                return ui.set(UiStateKeys.INVALID_PATTERN_SPEC_INPUTS, action.data)
            }
            case UiActionType.SET_UNSUBMITTED_PATTERN_SPEC_INPUTS: {
                return ui.set(UiStateKeys.UNSUBMITTED_PATTERN_SPEC_INPUTS, action.data)
            }
            default: {
                return ui
            }
        }
    }

export {
    uiReducer,
}
