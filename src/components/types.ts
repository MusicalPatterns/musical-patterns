import { PatternId } from '../../patterns'
import { Time } from '../nominal'
import { PatternChangeEventExtractor, PatternSpecEventExtractor } from '../patternSpec'
import { ImmutablePatternSpecState, StringifiedPatternSpec } from '../state'
import { Thread } from '../types'
import { Maybe } from '../utilities'

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

interface PatternListenerPropsFromDispatch {
    recompileAndRestart: (patternId: PatternId, submittedPatternSpec: StringifiedPatternSpec) => Promise<void>,
}

interface PatternListenerPropsFromParent {
    patternId: PatternId,
}

interface PatternListenerProps extends PatternListenerPropsFromDispatch,
    PatternListenerPropsFromState, PatternListenerPropsFromParent {
}

interface ThreadsChangeListenerPropsFromState {
    threads: Thread[],
}

interface ThreadsChangeListenerPropsFromDispatch {
    resetClock: () => void,
}

interface ThreadsChangeListenerProps extends ThreadsChangeListenerPropsFromState,
    ThreadsChangeListenerPropsFromDispatch {
}

interface TimeControlsPropsFromState {
    atomicTime: Time,
    paused: boolean,
}

interface TimeControlsPropsFromDispatch {
    togglePaused: () => void,
}

interface TimeControlsProps extends TimeControlsPropsFromState, TimeControlsPropsFromDispatch {
}

type RecompileAndRestart = (patternId: PatternId, submittedPatternSpec: StringifiedPatternSpec) => Promise<void>

export {
    AppProps,
    PatternSpecInputsProps,
    PatternSpecInputsPropsFromState,
    PatternSpecInputsPropsFromDispatch,
    PatternSpecInputProps,
    PatternListProps,
    PatternListenerPropsFromState,
    PatternListenerPropsFromDispatch,
    PatternListenerProps,
    ThreadsChangeListenerProps,
    ThreadsChangeListenerPropsFromState,
    ThreadsChangeListenerPropsFromDispatch,
    TimeControlsPropsFromState,
    TimeControlsPropsFromDispatch,
    TimeControlsProps,
    RecompileAndRestart,
}
