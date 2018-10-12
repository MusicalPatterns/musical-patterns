import { Map } from 'immutable'
import { Song } from '../songTypes'
import { Entities } from '../types'

type StringifiedConfigEntry = [string, string]

interface StringifiedConfig {
    [index: string]: string,
}

interface StringifiedConfigStates {
    [index: string]: boolean,
}

interface RawState {
    displayedConfig: StringifiedConfig,
    entities: Entities,
    invalidConfigInputs: StringifiedConfigStates,
    song?: Song,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
}

type AllowedValue =
    Entities |
    Song |
    StringifiedConfig |
    StringifiedConfigStates |
    boolean

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
    displayedConfig: {},
    entities: [],
    invalidConfigInputs: {},
    song: undefined,
    submittedConfig: {},
    unsubmittedConfigInputs: {},
}

const initialState: State = immutablizeState(rawState)

export {
    StringifiedConfig,
    StringifiedConfigStates,
    State,
    initialState,
    immutablizeState,
    StringifiedConfigEntry,
}
