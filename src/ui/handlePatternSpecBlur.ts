import { ActionType, StringifiedPatternSpecInputStates, Ui } from '../state'
import { HandlePatternSpecBlurParameters } from './types'

const handlePatternSpecBlur: (handlePatternSpecBlurParameters: HandlePatternSpecBlurParameters) => void =
    (handlePatternSpecBlurParameters: HandlePatternSpecBlurParameters): void => {
        const {
            patternSpecKey,
            patternSpecValue,
            dispatch,
            ui,
        }: HandlePatternSpecBlurParameters = handlePatternSpecBlurParameters
        const { submittedPatternSpec, unsubmittedPatternSpecInputs }: Ui = ui.toJS()
        const currentPatternSpecValue: string = submittedPatternSpec[ patternSpecKey ]

        const updatedUnsubmittedInputs: StringifiedPatternSpecInputStates = {
            ...unsubmittedPatternSpecInputs,
            [ patternSpecKey ]: currentPatternSpecValue !== patternSpecValue,
        }

        dispatch({ type: ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS, data: updatedUnsubmittedInputs })
    }

export {
    handlePatternSpecBlur,
}
