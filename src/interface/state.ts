import { Map } from 'immutable'
import { Song } from '../songTypes'
import { Entities } from '../types'

interface InterfaceConfig {
    [index: string]: string,
}

interface InterfaceConfigStates {
    [index: string]: boolean,
}

interface RawState {
    actualCurrentConfig: InterfaceConfig,
    entities: Entities,
    interfaceConfig: InterfaceConfig,
    invalidInputs: InterfaceConfigStates,
    song?: Song,
    unsubmittedInputs: InterfaceConfigStates,
}

type AllowedValue =
    Entities |
    Song |
    InterfaceConfig |
    InterfaceConfigStates |
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
    actualCurrentConfig: {},
    entities: [],
    interfaceConfig: {},
    invalidInputs: {},
    song: undefined,
    unsubmittedInputs: {},
}

const initialState: State = immutablizeState(rawState)

export {
    InterfaceConfig,
    InterfaceConfigStates,
    State,
    initialState,
    immutablizeState,
}
