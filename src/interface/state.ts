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

type MapTypeAllowedData<DataType> = {
    [K in keyof DataType]: AllowedValue
}

interface TypedMap<DataType extends MapTypeAllowedData<DataType>> extends Map<string, AllowedValue> {
    get<K extends keyof DataType>(key: K, notSetValue?: DataType[K]): DataType[K]

    set<K extends keyof DataType>(key: K, value: DataType[K]): this

    toJS(): DataType
}

type State = TypedMap<RawState>

const immutablizeState: <DataType extends MapTypeAllowedData<DataType>>(data: DataType) => TypedMap<DataType> =
    // tslint:disable-next-line:no-any no-unsafe-any
    <DataType extends MapTypeAllowedData<DataType>>(data: DataType): TypedMap<DataType> => Map(data) as any

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
