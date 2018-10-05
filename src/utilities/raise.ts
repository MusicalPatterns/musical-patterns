import * as from from './from'
import { Power } from './nominalTypes'

const raise: <T>(base: T, power: Power) => T =
    <T>(base: T, power: Power): T =>
        // @ts-ignore
        Math.pow(base, from.Power(power)) as T

export default raise
