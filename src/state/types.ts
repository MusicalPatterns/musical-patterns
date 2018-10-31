import { Map } from 'immutable'
import { PatternId } from '../../songs'
import { Maybe } from '../utilities'
import { ImmutableThreads } from './threads'
import { ImmutableUi, StringifiedPatternSpec, StringifiedPatternSpecInputStates } from './ui'

enum RootStateKeys {
    SONG_ID = 'patternId',
    THREADS = 'threads',
    UI = 'ui',
}

interface RootState {
    [ RootStateKeys.SONG_ID ]: Maybe<PatternId>,
    [ RootStateKeys.THREADS ]: ImmutableThreads,
    [ RootStateKeys.UI ]: ImmutableUi,
}

type ImmutableRootState = TypedMap<RootState>

type AllowedValue =
    undefined |
    ImmutableThreads |
    ImmutableUi |
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
}
