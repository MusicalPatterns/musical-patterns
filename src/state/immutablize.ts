import { Map } from 'immutable'
import { MapTypeAllowedData, TypedMap } from './types'

const immutablize: <T extends MapTypeAllowedData<T>>(data: T) => TypedMap<T> =
    // tslint:disable-next-line:no-any no-unsafe-any
    <T extends MapTypeAllowedData<T>>(data: T): TypedMap<T> => Map(data) as any

export {
    immutablize,
}
