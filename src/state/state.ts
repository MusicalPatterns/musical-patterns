import { Map } from 'immutable'
import { SongID } from '../songIds'
import { Threads } from '../types'

type StringifiedSongSpecEntry = [ string, string ]

interface StringifiedSongSpec {
    [ index: string ]: string,
}

interface StringifiedSongSpecInputStates {
    [ index: string ]: boolean,
}

interface UI {
    displayedSongSpec: StringifiedSongSpec,
    invalidSongSpecInputs: StringifiedSongSpecInputStates,
    submittedSongSpec: StringifiedSongSpec,
    unsubmittedSongSpecInputs: StringifiedSongSpecInputStates,
}

interface RawState {
    songId?: SongID,
    threads: Threads,
    ui: UI,
}

type AllowedValue =
    Threads |
    UI |
    SongID |
    undefined

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
    songId: undefined,
    threads: [],
    ui: {
        displayedSongSpec: {},
        invalidSongSpecInputs: {},
        submittedSongSpec: {},
        unsubmittedSongSpecInputs: {},
    },
}

const initialState: State = immutablizeState(rawState)

export {
    StringifiedSongSpec,
    StringifiedSongSpecInputStates,
    State,
    initialState,
    immutablizeState,
    UI,
    StringifiedSongSpecEntry,
}
