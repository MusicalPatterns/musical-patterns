import { PatternId } from '../../patterns'
import { ImmutableThreads, ImmutableUi } from '../state'
import { PatternChangeEventExtractor, PatternSpecEventExtractor } from '../ui'
import { Maybe } from '../utilities'

interface AppProps {
    patternId: Maybe<PatternId>,
}

interface PatternListPropsFromState {
    threads: ImmutableThreads,
}

interface PatternListPropsFromDispatch {
    handlePatternChangeEvent: PatternChangeEventExtractor,
}

interface PatternListProps extends PatternListPropsFromState, PatternListPropsFromDispatch {
}

interface PatternSpecInputsPropsFromState {
    threads: ImmutableThreads,
    ui: ImmutableUi,
}

interface PatternSpecInputsPropsFromDispatch {
    handlePatternSpecBlur: PatternSpecEventExtractor,
    handlePatternSpecButtonSubmit: PatternSpecEventExtractor,
    handlePatternSpecChange: PatternSpecEventExtractor,
    handlePatternSpecKeyboardSubmit: PatternSpecEventExtractor,
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
    PatternListProps,
    PatternListPropsFromState,
    PatternListPropsFromDispatch,
}
