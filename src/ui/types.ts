import * as React from 'react'
import { Dispatch } from 'redux'
import { Pattern, PatternId, Patterns, PatternSpec } from '../../patterns'
import { ImmutableThreads, ImmutableUi } from '../state'

interface PatternChangeEventHandlerParameters {
    dispatch: Dispatch,
    patternId: PatternId,
    threads: ImmutableThreads,
}

type PatternChangeEventHandler = (parameters: PatternChangeEventHandlerParameters) => Promise<void>

interface PatternChangeEventExtractorParameters {
    event: React.SyntheticEvent,
    threads: ImmutableThreads,
}

type PatternChangeEventExtractor = (parameters: PatternChangeEventExtractorParameters) => void

type PartialPatterns = {[key in Partial<PatternId>]: Pattern}

type PatternsFilter = (patterns: Patterns) => PartialPatterns

type PatternSpecEvent = React.SyntheticEvent | React.KeyboardEvent

interface PatternSpecEventParameters {
    patternId: PatternId,
    patternSpecKey: string,
    threads: ImmutableThreads,
    ui: ImmutableUi,
}

interface RecompileAndRestartParameters {
    dispatch: Dispatch,
    patternId: PatternId,
    patternSpec: PatternSpec,
}

type RecompileAndRestart = (recompileAndRestartParameters: RecompileAndRestartParameters) => Promise<void>

interface PatternSpecEventHandlerParameters extends PatternSpecEventParameters {
    dispatch: Dispatch,
    patternSpecValue: string,
}

type PatternSpecEventHandler = (parameters: PatternSpecEventHandlerParameters) => Promise<void> | void

interface PatternSpecEventExtractorParameters extends PatternSpecEventParameters {
    event: PatternSpecEvent,
}

type PatternSpecEventExtractor = (parameters: PatternSpecEventExtractorParameters) => void

interface BuildPatternSpecEventExtractorParameters {
    abortIfNotSubmitting?: boolean,
    dispatch: Dispatch,
    patternSpecEventHandler: PatternSpecEventHandler,
}

type BuildPatternSpecEventExtractor = (
    parameters: BuildPatternSpecEventExtractorParameters,
) => PatternSpecEventExtractor

type PatternSpecEventAttacher = (event: PatternSpecEvent) => void

interface BuildPatternSpecEventAttacherParameters {
    patternSpecEventExtractor: PatternSpecEventExtractor,
    patternSpecEventParameters: PatternSpecEventParameters,
}

type BuildPatternSpecEventAttacher = (parameters: BuildPatternSpecEventAttacherParameters) => PatternSpecEventAttacher

export {
    PatternChangeEventExtractor,
    PatternChangeEventExtractorParameters,
    PatternChangeEventHandler,
    PatternChangeEventHandlerParameters,
    PartialPatterns,
    PatternsFilter,
    RecompileAndRestart,
    RecompileAndRestartParameters,
    PatternSpecEvent,
    PatternSpecEventParameters,
    PatternSpecEventHandler,
    PatternSpecEventHandlerParameters,
    PatternSpecEventExtractor,
    PatternSpecEventExtractorParameters,
    BuildPatternSpecEventExtractor,
    BuildPatternSpecEventExtractorParameters,
    PatternSpecEventAttacher,
    BuildPatternSpecEventAttacher,
    BuildPatternSpecEventAttacherParameters,
}
