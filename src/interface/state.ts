import { Map } from 'immutable'
import { SongName } from '../songTypes'
import { Entity } from '../types'

interface Config {[index: string]: number}

interface RawState {
    config: Config,
    entities: Entity[],
    songName: SongName,
}

type AllowedValue =
    Entity[] |
    Config |
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

const createTypedMap: <DataType extends MapTypeAllowedData<DataType>>(data: DataType) => TypedMap<DataType> =
    // tslint:disable-next-line:no-any no-unsafe-any
    <DataType extends MapTypeAllowedData<DataType>>(data: DataType): TypedMap<DataType> => Map(data) as any

const rawState: RawState = {
    config: {},
    entities: [],
    songName: SongName.BEATEN_PATH,
}

const initialState: State = createTypedMap(rawState)

export {
    State,
    initialState,
    Config,
}
