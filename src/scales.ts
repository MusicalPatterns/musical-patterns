import { Scale } from './types'
import { Scalar } from './utilities/nominalTypes'
import numbers from './utilities/numbers'
import * as to from './utilities/to'

const subharmonicSeriesScale: Scale = numbers.map((n: number): Scalar => to.Scalar(1 / n))

const harmonicSeriesScale: Scale = numbers.map((n: number): Scalar => to.Scalar(n))

export {
    subharmonicSeriesScale,
    harmonicSeriesScale,
}
