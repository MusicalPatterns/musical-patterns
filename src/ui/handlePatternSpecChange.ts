import { ActionType, StringifiedPatternSpec, StringifiedPatternSpecInputStates, Ui } from '../state'
import { PatternSpecEventHandler, PatternSpecEventHandlerParameters } from './types'

const handlePatternSpecChange: PatternSpecEventHandler =
    (patternSpecHandlerParameters: PatternSpecEventHandlerParameters): void => {
        const {
            dispatch,
            patternSpecKey,
            patternSpecValue,
            ui,
        }: PatternSpecEventHandlerParameters = patternSpecHandlerParameters
        const {
            disabledPatternSpecButtons,
            displayedPatternSpec,
            invalidPatternSpecInputs,
            submittedPatternSpec,
        }: Ui = ui.toJS()

        const updatedStringifiedPatternSpec: StringifiedPatternSpec = {
            ...displayedPatternSpec,
            [ patternSpecKey ]: patternSpecValue,
        }

        const updatedInvalidInputs: StringifiedPatternSpecInputStates = {
            ...invalidPatternSpecInputs,
            [ patternSpecKey ]: false,
        }

        const currentPatternSpecValue: string = submittedPatternSpec[ patternSpecKey ]
        const updatedDisabledButtons: StringifiedPatternSpecInputStates = {
            ...disabledPatternSpecButtons,
            [ patternSpecKey ]: currentPatternSpecValue === patternSpecValue,
        }

        dispatch({ type: ActionType.SET_DISPLAYED_PATTERN_SPEC, data: updatedStringifiedPatternSpec })
        dispatch({ type: ActionType.SET_INVALID_PATTERN_SPEC_INPUTS, data: updatedInvalidInputs })
        dispatch({ type: ActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS, data: updatedDisabledButtons })
    }

export {
    handlePatternSpecChange,
}
