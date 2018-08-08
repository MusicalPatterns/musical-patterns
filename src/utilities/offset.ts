import * as from from './from'
import { Offset } from './nominalTypes'

const offset: <T>(value: T, offsetAmount: Offset) => T =
    <T>(value: T, offsetAmount: Offset): T =>
        // @ts-ignore
        value + from.Offset(offsetAmount) as T

export default offset
