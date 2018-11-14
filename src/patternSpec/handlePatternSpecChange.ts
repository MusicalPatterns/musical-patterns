import { BatchAction, batchActions } from 'redux-batched-actions'
import { ActionType, PatternSpecState, StringifiedPatternSpec, StringifiedPatternSpecInputStates } from '../state'
import { PatternSpecEventHandler, PatternSpecEventHandlerParameters } from './types'

const handlePatternSpecChange: PatternSpecEventHandler =
    (patternSpecHandlerParameters: PatternSpecEventHandlerParameters): void => {
        const {
            dispatch,
            patternSpecKey,
            patternSpecValue,
            patternSpecState,
        }: PatternSpecEventHandlerParameters = patternSpecHandlerParameters
        const {
            disabledPatternSpecButtons,
            displayedPatternSpec,
            invalidPatternSpecInputs,
            submittedPatternSpec,
        }: PatternSpecState = patternSpecState.toJS()

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

        const batchedAction: BatchAction = batchActions([
            { type: ActionType.SET_DISPLAYED_PATTERN_SPEC, data: updatedStringifiedPatternSpec },
            { type: ActionType.SET_INVALID_PATTERN_SPEC_INPUTS, data: updatedInvalidInputs },
            { type: ActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS, data: updatedDisabledButtons },
        ])
        dispatch(batchedAction)
    }

export {
    handlePatternSpecChange,
}
