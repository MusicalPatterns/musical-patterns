import { Map } from 'immutable'
import { Song } from '../songTypes'
import { Entities } from '../types'
import { emptySong } from './emptySong'
import { InterfaceConfig } from './types'

interface RawState {
    entities: Entities,
    interfaceConfig: InterfaceConfig,
    song: Song,
}

type AllowedValue =
    Entities |
    Song |
    InterfaceConfig

type MapTypeAllowedData<T> = {
    [K in keyof T]: AllowedValue
}

interface TypedMap<T extends MapTypeAllowedData<T>> extends Map<string, AllowedValue> {
    get<K extends keyof T>(key: K, notSetValue?: T[K]): T[K]

    set<K extends keyof T>(key: K, value: T[K]): this

    toJS(): T
}

type State = TypedMap<RawState>

const immutablizeState: <T extends MapTypeAllowedData<T>>(data: T) => TypedMap<T> =
    // tslint:disable-next-line:no-any no-unsafe-any
    <T extends MapTypeAllowedData<T>>(data: T): TypedMap<T> => Map(data) as any

const rawState: RawState = {
    entities: [],
    interfaceConfig: {},
    song: emptySong,
}

const initialState: State = immutablizeState(rawState)

export {
    State,
    initialState,
    immutablizeState,
}
