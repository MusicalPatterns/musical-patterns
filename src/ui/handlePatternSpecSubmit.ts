import { patterns, PatternSpec } from '../../patterns'
import { ActionType, StringifiedPatternSpec, StringifiedPatternSpecInputStates, Ui } from '../state'
import { deepEqual } from '../utilities'
import { destringifyPatternSpec } from './destringifyPatternSpec'
import { recompileAndRestart } from './recompileAndRestart'
import { stopThreads } from './stopThreads'
import { HandlePatternSpecSubmitParameters } from './types'

const handlePatternSpecSubmit: (handlePatternSpecSubmitParameters: HandlePatternSpecSubmitParameters) => Promise<void> =
    async (handlePatternSpecSubmitParameters: HandlePatternSpecSubmitParameters): Promise<void> => {
        const { patternSpecKey, patternSpecValue, dispatch, patternId, threads, ui } = handlePatternSpecSubmitParameters
        const { invalidPatternSpecInputs, submittedPatternSpec, unsubmittedPatternSpecInputs }: Ui = ui.toJS()

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
            dispatch({ type: ActionType.SET_SUBMITTED_SONG_SPEC, data: updatedPatternSpec })

            const updatedUnsubmittedInputs: StringifiedPatternSpecInputStates = {
                ...unsubmittedPatternSpecInputs,
                [ patternSpecKey ]: false,
            }
            dispatch({ type: ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS, data: updatedUnsubmittedInputs })

            await recompileAndRestart({ patternSpec, dispatch, patternId })
        }
        catch (e) {
            const updatedInvalidInputs: StringifiedPatternSpecInputStates = {
                ...invalidPatternSpecInputs,
                [ patternSpecKey ]: true,
            }
            dispatch({ type: ActionType.SET_INVALID_SONG_SPEC_INPUTS, data: updatedInvalidInputs })
        }
    }

export {
    handlePatternSpecSubmit,
}
