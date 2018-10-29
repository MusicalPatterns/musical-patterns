import { Map } from 'immutable'
import { SongId } from '../../songs'
import { Maybe } from '../utilities'
import { ImmutableThreads } from './threads'
import { ImmutableUi, StringifiedSongSpec, StringifiedSongSpecInputStates } from './ui'

enum RootStateKeys {
    SONG_ID = 'songId',
    THREADS = 'threads',
    UI = 'ui',
}

interface RootState {
    [ RootStateKeys.SONG_ID ]: Maybe<SongId>,
    [ RootStateKeys.THREADS ]: ImmutableThreads,
    [ RootStateKeys.UI ]: ImmutableUi,
}

type ImmutableRootState = TypedMap<RootState>

type AllowedValue =
    undefined |
    ImmutableThreads |
    ImmutableUi |
    Maybe<SongId> |
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
