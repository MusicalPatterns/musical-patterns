import { Map } from 'immutable'
import { Song } from '../songTypes'
import { Entities } from '../types'

type StringifiedConfigEntry = [ string, string ]

interface StringifiedConfig {
    [ index: string ]: string,
}

interface StringifiedConfigStates {
    [ index: string ]: boolean,
}

interface UI {
    displayedConfig: StringifiedConfig,
    invalidConfigInputs: StringifiedConfigStates,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
}

interface RawState {
    entities: Entities,
    song?: Song,
    ui: UI,
}

type AllowedValue =
    Entities |
    Song |
    UI

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
    song: undefined,
    ui: {
        displayedConfig: {},
        invalidConfigInputs: {},
        submittedConfig: {},
        unsubmittedConfigInputs: {},
    },
}

const initialState: State = immutablizeState(rawState)

export {
    StringifiedConfig,
    StringifiedConfigStates,
    State,
    initialState,
    immutablizeState,
    UI,
    StringifiedConfigEntry,
}
