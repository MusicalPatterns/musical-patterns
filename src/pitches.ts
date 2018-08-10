import { Scale } from './types'
import { Scalar } from './utilities/nominalTypes'
import numbers from './utilities/numbers'
import * as to from './utilities/to'

const subharmonicSeriesPitches: Scale = numbers.map((n: number): Scalar => to.Scalar(1 / n))

const harmonicSeriesPitches: Scale = numbers.map((n: number): Scalar => to.Scalar(n))

export {
    subharmonicSeriesPitches,
    harmonicSeriesPitches,
}
