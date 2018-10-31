import { ActionType, StringifiedPatternSpec, StringifiedPatternSpecInputStates, Ui } from '../state'
import { HandlePatternSpecChangeParameters } from './types'

const handlePatternSpecChange: (handlePatternSpecChangeParameters: HandlePatternSpecChangeParameters) => void =
    (parameters: HandlePatternSpecChangeParameters): void => {
        const { dispatch, patternSpecKey, patternSpecValue, ui }: HandlePatternSpecChangeParameters = parameters
        const { displayedPatternSpec, invalidPatternSpecInputs }: Ui = ui.toJS()

        const updatedStringifiedPatternSpec: StringifiedPatternSpec = {
            ...displayedPatternSpec,
            [ patternSpecKey ]: patternSpecValue,
        }
        dispatch({ type: ActionType.SET_DISPLAYED_SONG_SPEC, data: updatedStringifiedPatternSpec })

        const updatedInvalidInputs: StringifiedPatternSpecInputStates = {
            ...invalidPatternSpecInputs,
            [ patternSpecKey ]: false,
        }
        dispatch({ type: ActionType.SET_INVALID_SONG_SPEC_INPUTS, data: updatedInvalidInputs })
    }

export {
    handlePatternSpecChange,
}
