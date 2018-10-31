import { PatternId } from '../../songs'
import { ImmutableThreads, ImmutableUi } from '../state'
import {
    HandlePatternChangeEvent,
    HandlePatternSpecBlurEvent,
    HandlePatternSpecChangeEvent,
    HandlePatternSpecSubmitEvent,
} from '../ui'
import { Maybe } from '../utilities'

interface AppProps {
    patternId: Maybe<PatternId>,
}

interface PatternSelectPropsFromState {
    threads: ImmutableThreads,
}

interface PatternSelectPropsFromDispatch {
    handlePatternChangeEvent: HandlePatternChangeEvent,
}

interface PatternSelectProps extends PatternSelectPropsFromState, PatternSelectPropsFromDispatch {
}

interface PatternSpecInputsPropsFromState {
    threads: ImmutableThreads,
    ui: ImmutableUi,
}

interface PatternSpecInputsPropsFromDispatch {
    handlePatternSpecBlurEvent: HandlePatternSpecBlurEvent,
    handlePatternSpecChangeEvent: HandlePatternSpecChangeEvent,
    handlePatternSpecSubmitEvent: HandlePatternSpecSubmitEvent,
}

interface PatternSpecInputsPropsFromParent {
    patternId: PatternId,
}

interface PatternSpecInputsProps extends PatternSpecInputsPropsFromState,
    PatternSpecInputsPropsFromDispatch,
    PatternSpecInputsPropsFromParent {
}

interface PatternSpecInputProps {
    patternSpecInputsProps: PatternSpecInputsProps,
    patternSpecKey: string,
}

export {
    AppProps,
    PatternSpecInputsProps,
    PatternSpecInputsPropsFromState,
    PatternSpecInputsPropsFromDispatch,
    PatternSpecInputProps,
    PatternSelectProps,
    PatternSelectPropsFromState,
    PatternSelectPropsFromDispatch,
}
