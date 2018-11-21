import { BatchAction, batchActions } from 'redux-batched-actions'
import { ActionType, PatternSpecState, StringifiedPatternSpec, StringifiedPatternSpecInputStates } from '../state'
import { deepEqual } from '../utilities'
import { PatternSpecEventHandler, PatternSpecEventHandlerParameters } from './types'

const validateValueByThrowingIfUnparsable: (patternSpecValue: string) => void =
    (patternSpecValue: string): void => {
        JSON.parse(patternSpecValue)
    }

const handlePatternSpecSubmit: PatternSpecEventHandler =
    async (patternSpecHandlerParameters: PatternSpecEventHandlerParameters): Promise<void> => {
        const { patternSpecKey, patternSpecValue, dispatch, patternSpecState } = patternSpecHandlerParameters
        const {
            disabledPatternSpecButtons,
            invalidPatternSpecInputs,
            submittedPatternSpec,
            unsubmittedPatternSpecInputs,
        }: PatternSpecState = patternSpecState.toJS()

        const updatedPatternSpec: StringifiedPatternSpec = {
            ...submittedPatternSpec,
            [ patternSpecKey ]: patternSpecValue,
        }
        if (deepEqual(submittedPatternSpec, updatedPatternSpec)) {
            return
        }

        try {
            validateValueByThrowingIfUnparsable(patternSpecValue)

            const updatedUnsubmittedInputs: StringifiedPatternSpecInputStates = {
                ...unsubmittedPatternSpecInputs,
                [ patternSpecKey ]: false,
            }

            const updatedDisabledButtons: StringifiedPatternSpecInputStates = {
                ...disabledPatternSpecButtons,
                [ patternSpecKey ]: true,
            }

            const batchedAction: BatchAction = batchActions([
                { type: ActionType.SET_SUBMITTED_PATTERN_SPEC, data: updatedPatternSpec },
                { type: ActionType.SET_UNSUBMITTED_PATTERN_SPEC_INPUTS, data: updatedUnsubmittedInputs },
                { type: ActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS, data: updatedDisabledButtons },
            ])
            dispatch(batchedAction)
        }
        catch (e) {
            const updatedInvalidInputs: StringifiedPatternSpecInputStates = {
                ...invalidPatternSpecInputs,
                [ patternSpecKey ]: true,
            }
            dispatch({ type: ActionType.SET_INVALID_PATTERN_SPEC_INPUTS, data: updatedInvalidInputs })
        }
    }

export {
    handlePatternSpecSubmit,
}
