import { Map } from 'immutable'
import { PatternId } from '../../patterns'
import { Time } from '../nominal'
import { Thread } from '../types'
import { Maybe } from '../utilities'
import { PatternIdStateAction } from './patternId'
import {
    ImmutablePatternSpecState,
    PatternSpecStateAction,
    StringifiedPatternSpec,
    StringifiedPatternSpecInputStates,
} from './patternSpec'
import { ImmutablePerformanceState, PerformanceStateAction } from './performance'

type Action = PatternIdStateAction |
    PerformanceStateAction |
    PatternSpecStateAction

enum RootStateKeys {
    PATTERN_ID = 'patternId',
    PATTERN_SPEC = 'patternSpec',
    PERFORMANCE = 'performance',
}

interface RootState {
    [ RootStateKeys.PATTERN_ID ]: Maybe<PatternId>,
    [ RootStateKeys.PERFORMANCE ]: ImmutablePerformanceState,
    [ RootStateKeys.PATTERN_SPEC ]: ImmutablePatternSpecState,
}

type ImmutableRootState = TypedMap<RootState>

type AllowedValue =
    undefined |
    boolean |
    string |
    Time |
    Worker |
    Thread[] |
    ImmutablePatternSpecState |
    ImmutablePerformanceState |
    Maybe<PatternId> |
    StringifiedPatternSpecInputStates |
    StringifiedPatternSpec

type MapTypeAllowedData<T> = {
    [K in keyof T]: AllowedValue
}

interface TypedMap<T extends MapTypeAllowedData<T>> extends Map<string, AllowedValue> {
    get<K extends keyof T>(key: K, notSetValue?: T[K]): T[K]

    set<K extends keyof T>(key: K, value: T[K]): this

    toJS(): T
}

export {
    ImmutableRootState,
    TypedMap,
    MapTypeAllowedData,
    RootStateKeys,
    Action,
}
