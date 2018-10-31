import * as React from 'react'
import { Dispatch } from 'redux'
import { Pattern, PatternId, Patterns, PatternSpec } from '../../songs'
import { ImmutableThreads, ImmutableUi } from '../state'

interface HandlePatternSpecChangeParameters {
    dispatch: Dispatch,
    patternSpecKey: string,
    patternSpecValue: string,
    ui: ImmutableUi,
}
interface HandlePatternSpecChangeEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    patternSpecKey: string,
    ui: ImmutableUi,
}
type HandlePatternSpecChangeEvent = (
    handlePatternSpecChangeEventParameters: HandlePatternSpecChangeEventParameters,
) => void

interface HandlePatternSpecSubmitParameters {
    dispatch: Dispatch,
    patternId: PatternId,
    patternSpecKey: string,
    patternSpecValue: string,
    threads: ImmutableThreads,
    ui: ImmutableUi,
}
interface HandlePatternSpecSubmitEventParameters {
    event: React.KeyboardEvent,
    patternId: PatternId,
    patternSpecKey: string,
    threads: ImmutableThreads,
    ui: ImmutableUi,
}
type HandlePatternSpecSubmitEvent = (
    handlePatternSpecSubmitEventParameters: HandlePatternSpecSubmitEventParameters,
) => void

interface HandlePatternChangeParameters {
    dispatch: Dispatch,
    patternId: PatternId,
    threads: ImmutableThreads,
}
interface HandlePatternChangeEventParameters {
    event: React.SyntheticEvent<HTMLSelectElement>,
    threads: ImmutableThreads,
}
type HandlePatternChangeEvent = (handlePatternChangeEventParameters: HandlePatternChangeEventParameters) => void

interface HandlePatternSpecBlurParameters {
    dispatch: Dispatch,
    patternSpecKey: string,
    patternSpecValue: string,
    ui: ImmutableUi,
}
interface HandlePatternSpecBlurEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    patternSpecKey: string,
    ui: ImmutableUi,
}
type HandlePatternSpecBlurEvent = (handlePatternSpecBlurEventParameters: HandlePatternSpecBlurEventParameters) => void

type PartialPatterns = {[key in Partial<PatternId>]: Pattern}

type PatternsFilter = (patterns: Patterns) => PartialPatterns

interface RecompileAndRestartParameters {
    dispatch: Dispatch,
    patternId: PatternId,
    patternSpec: PatternSpec,
}

export {
    HandlePatternSpecChangeEvent,
    HandlePatternSpecChangeEventParameters,
    HandlePatternSpecChangeParameters,
    HandlePatternSpecSubmitEvent,
    HandlePatternSpecSubmitEventParameters,
    HandlePatternSpecSubmitParameters,
    HandlePatternChangeEvent,
    HandlePatternChangeEventParameters,
    HandlePatternChangeParameters,
    HandlePatternSpecBlurEvent,
    HandlePatternSpecBlurEventParameters,
    HandlePatternSpecBlurParameters,
    PartialPatterns,
    PatternsFilter,
    RecompileAndRestartParameters,
}
