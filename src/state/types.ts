import { Map } from 'immutable'
import { SongID } from '../song'
import { Maybe } from '../utilities'
import { ImmutableThreads } from './threads'
import { ImmutableUI, StringifiedSongSpec, StringifiedSongSpecInputStates } from './ui'

enum RootStateKeys {
    SONG_ID = 'songId',
    THREADS = 'threads',
    UI = 'ui',
}

interface RootState {
    [ RootStateKeys.SONG_ID ]: Maybe<SongID>,
    [ RootStateKeys.THREADS ]: ImmutableThreads,
    [ RootStateKeys.UI ]: ImmutableUI,
}

type ImmutableRootState = TypedMap<RootState>

type AllowedValue =
    undefined |
    ImmutableThreads |
    ImmutableUI |
    Maybe<SongID> |
    StringifiedSongSpecInputStates |
    StringifiedSongSpec

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
