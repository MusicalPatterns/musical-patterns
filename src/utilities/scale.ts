import * as from from './from'
import { Scalar } from './nominalTypes'

const scale: <T>(value: T, scalar: Scalar) => T =
    <T>(value: T, scalar: Scalar): T =>
        // @ts-ignore
        value * from.Scalar(scalar) as T

export default scale
