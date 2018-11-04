import { patterns, PatternSpec } from '../../patterns'
import { ActionType, StringifiedPatternSpec, StringifiedPatternSpecInputStates, Ui } from '../state'
import { deepEqual } from '../utilities'
import { destringifyPatternSpec } from './destringifyPatternSpec'
import { recompileAndRestart } from './recompileAndRestart'
import { stopThreads } from './stopThreads'
import { PatternSpecEventHandler, PatternSpecEventHandlerParameters } from './types';

const handlePatternSpecSubmit: PatternSpecEventHandler =
    async (patternSpecHandlerParameters: PatternSpecEventHandlerParameters): Promise<void> => {
        const { patternSpecKey, patternSpecValue, dispatch, patternId, threads, ui } = patternSpecHandlerParameters
        const {
            disabledPatternSpecButtons,
            invalidPatternSpecInputs,
            submittedPatternSpec,
            unsubmittedPatternSpecInputs,
        }: Ui = ui.toJS()

        const updatedPatternSpec: StringifiedPatternSpec = {
            ...submittedPatternSpec,
            [ patternSpecKey ]: patternSpecValue,
        }
        if (deepEqual(submittedPatternSpec, updatedPatternSpec)) {
            return
        }

        try {
            const patternSpec: PatternSpec = {
                ...patterns[patternId].spec,
                ...destringifyPatternSpec(updatedPatternSpec),
            }
            stopThreads(threads)

            const updatedUnsubmittedInputs: StringifiedPatternSpecInputStates = {
                ...unsubmittedPatternSpecInputs,
                [ patternSpecKey ]: false,
            }

            const updatedDisabledButtons: StringifiedPatternSpecInputStates = {
                ...disabledPatternSpecButtons,
                [ patternSpecKey ]: true,
            }

            dispatch({ type: ActionType.SET_SUBMITTED_PATTERN_SPEC, data: updatedPatternSpec })
            dispatch({ type: ActionType.SET_UNSUBMITTED_PATTERN_SPEC_INPUTS, data: updatedUnsubmittedInputs })
            dispatch({ type: ActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS, data: updatedDisabledButtons })

            await recompileAndRestart({ patternSpec, dispatch, patternId })
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
