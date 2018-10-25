import { Map } from 'immutable'
import { SongID } from '../songIds'
import { Maybe } from '../utilities/types'
import { ImmutableThreads } from './threadsState'
import { ImmutableUI, StringifiedSongSpec, StringifiedSongSpecInputStates } from './uiState'

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

const immutablize: <T extends MapTypeAllowedData<T>>(data: T) => TypedMap<T> =
    // tslint:disable-next-line:no-any no-unsafe-any
    <T extends MapTypeAllowedData<T>>(data: T): TypedMap<T> => Map(data) as any

export {
    TypedMap,
    immutablize,
}
