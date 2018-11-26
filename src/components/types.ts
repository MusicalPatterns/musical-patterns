import { Maybe, Time } from '@musical-patterns/shared'
import { PatternId } from '../patterns'
import { PatternChangeEventExtractor, PatternSpecEventExtractor } from '../patternSpec'
import { ImmutablePatternSpecState, StringifiedPatternSpec } from '../state'

interface AppProps {
    patternId: Maybe<PatternId>,
}

interface PatternListProps {
    handlePatternChangeEvent: PatternChangeEventExtractor,
}

interface PatternSpecInputsPropsFromState {
    patternSpecState: ImmutablePatternSpecState,
}

interface PatternSpecInputsPropsFromDispatch {
    handlePatternSpecBlur: PatternSpecEventExtractor,
    handlePatternSpecButtonSubmit: PatternSpecEventExtractor,
    handlePatternSpecChange: PatternSpecEventExtractor,
    handlePatternSpecKeyboardSubmit: PatternSpecEventExtractor,
}

interface PatternSpecInputsProps extends PatternSpecInputsPropsFromState, PatternSpecInputsPropsFromDispatch {
}

interface PatternSpecInputProps {
    patternSpecInputsProps: PatternSpecInputsProps,
    patternSpecKey: string,
}

interface PatternListenerPropsFromState {
    submittedPatternSpec: StringifiedPatternSpec,
}

interface PatternListenerPropsFromParent {
    patternId: PatternId,
}

interface PatternListenerProps extends PatternListenerPropsFromState, PatternListenerPropsFromParent {
}

interface TimeControlsPropsFromState {
    paused: boolean,
    time: Time,
}

interface TimeControlsPropsFromDispatch {
    onClick: () => void,
}

interface TimeControlsProps extends TimeControlsPropsFromState, TimeControlsPropsFromDispatch {
}

export {
    TimeControlsProps,
    TimeControlsPropsFromDispatch,
    TimeControlsPropsFromState,
    AppProps,
    PatternSpecInputsProps,
    PatternSpecInputsPropsFromState,
    PatternSpecInputsPropsFromDispatch,
    PatternSpecInputProps,
    PatternListProps,
    PatternListenerPropsFromState,
    PatternListenerProps,
}
