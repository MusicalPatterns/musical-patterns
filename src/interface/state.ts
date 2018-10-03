import { Map } from 'immutable'
import { Entity } from '../types'

interface RawState {
    entities: Entity[],
}

type AllowedValue =
    Entity[]

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
    entities: [],
}

const initialState: State = createTypedMap(rawState)

export {
    State,
    initialState,
}
