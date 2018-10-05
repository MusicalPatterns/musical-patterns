import { Map } from 'immutable'
import { Core } from '../../songs/beaten-path/src/types'
import { SongName } from '../songTypes'
import { Entities } from '../types'

interface Config {[index: string]: Core}

interface RawState {
    config: Config,
    entities: Entities,
    songName: SongName,
}

type AllowedValue =
    Config |
    Entities |
    SongName

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
    config: {},
    entities: [],
    songName: SongName.BEATEN_PATH,
}

const initialState: State = immutablizeState(rawState)

export {
    State,
    initialState,
    Config,
    immutablizeState,
}
