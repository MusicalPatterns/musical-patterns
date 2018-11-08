import { ActionType, PatternSpecState, StringifiedPatternSpecInputStates } from '../state'
import { PatternSpecEventHandler, PatternSpecEventHandlerParameters } from './types'

const handlePatternSpecBlur: PatternSpecEventHandler =
    (patternSpecHandlerParameters: PatternSpecEventHandlerParameters): void => {
        const {
            patternSpecKey,
            patternSpecValue,
            dispatch,
            patternSpecState,
        }: PatternSpecEventHandlerParameters = patternSpecHandlerParameters
        const { submittedPatternSpec, unsubmittedPatternSpecInputs }: PatternSpecState = patternSpecState.toJS()
        const currentPatternSpecValue: string = submittedPatternSpec[ patternSpecKey ]

        const updatedUnsubmittedInputs: StringifiedPatternSpecInputStates = {
            ...unsubmittedPatternSpecInputs,
            [ patternSpecKey ]: currentPatternSpecValue !== patternSpecValue,
        }

        dispatch({ type: ActionType.SET_UNSUBMITTED_PATTERN_SPEC_INPUTS, data: updatedUnsubmittedInputs })
    }

export {
    handlePatternSpecBlur,
}
