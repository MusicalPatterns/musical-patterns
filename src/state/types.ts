import { Maybe, Time } from '@musical-patterns/utilities'
import { Map } from 'immutable'
import { PatternId } from '../../patterns'
import { PatternIdStateAction } from './patternId'
import {
    ImmutablePatternSpecState,
    PatternSpecStateAction,
    StringifiedPatternSpec,
    StringifiedPatternSpecInputStates,
} from './patternSpec'
import { ImmutablePerformerState } from './performer'

type Action = PatternIdStateAction |
    PatternSpecStateAction

enum RootStateKeys {
    PATTERN_ID = 'PATTERN_ID',
    PATTERN_SPEC = 'PATTERN_SPEC',
    PERFORMER = 'PERFORMER',
}

interface StateIndexSignature {
    [ index: string ]: AllowedValue,
}

interface RootState extends StateIndexSignature {
    [ RootStateKeys.PATTERN_ID ]: Maybe<PatternId>,
    [ RootStateKeys.PATTERN_SPEC ]: ImmutablePatternSpecState,
    [ RootStateKeys.PERFORMER ]: ImmutablePerformerState,

    [ index: string ]: AllowedValue,
}

type ImmutableRootState = TypedMap<RootState>

type AllowedValue =
    ImmutablePatternSpecState |
    ImmutablePerformerState |
    Maybe<PatternId> |
    StringifiedPatternSpecInputStates |
    StringifiedPatternSpec |
    Time |
    boolean

type MapTypeAllowedData<T> = StateIndexSignature & {
    [K in keyof T]: AllowedValue
}

interface TypedMap<T extends MapTypeAllowedData<T>> extends Map<string, AllowedValue> {
    get<K extends keyof T>(key: K, notSetValue?: T[K]): T[K]

    set<K extends keyof T>(key: K, value: T[K]): this

    toJS(): T
}

export {
    StateIndexSignature,
    ImmutableRootState,
    TypedMap,
    MapTypeAllowedData,
    RootStateKeys,
    Action,
}
