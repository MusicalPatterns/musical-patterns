import { Map } from 'immutable'
import { PatternId } from '../../patterns'
import { Maybe } from '../utilities'
import { PatternIdStateAction } from './patternId'
import {
    ImmutablePatternSpecState,
    PatternSpecStateAction,
    StringifiedPatternSpec,
    StringifiedPatternSpecInputStates,
} from './patternSpec'

type Action = PatternIdStateAction |
    PatternSpecStateAction

enum RootStateKeys {
    PATTERN_ID = 'patternId',
    PATTERN_SPEC = 'patternSpec',
}

interface StateIndexSignature {
    [index: string]: AllowedValue,
}

interface RootState extends StateIndexSignature {
    [ RootStateKeys.PATTERN_ID ]: Maybe<PatternId>,
    [ RootStateKeys.PATTERN_SPEC ]: ImmutablePatternSpecState,
    [index: string]: AllowedValue,
}

type ImmutableRootState = TypedMap<RootState>

type AllowedValue =
    ImmutablePatternSpecState |
    Maybe<PatternId> |
    StringifiedPatternSpecInputStates |
    StringifiedPatternSpec

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
