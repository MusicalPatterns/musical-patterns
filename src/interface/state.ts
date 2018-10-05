import { Map } from 'immutable'
import { CustomConfig, SongName, StandardConfig } from '../songTypes'
import { Entities } from '../types'

interface RawState {
    customConfig: CustomConfig,
    entities: Entities,
    songName: SongName,
    standardConfig: StandardConfig,
}

type AllowedValue =
    CustomConfig |
    Entities |
    SongName |
    StandardConfig

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
    customConfig: {},
    entities: [],
    songName: SongName.BEATEN_PATH,
    standardConfig: {},
}

const initialState: State = immutablizeState(rawState)

export {
    State,
    initialState,
    immutablizeState,
}
