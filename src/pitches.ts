import { Scalar } from './utilities/nominalTypes'
import numbers from './utilities/numbers'
import * as to from './utilities/to'

const subharmonicSeriesPitches: Scalar[] = numbers.map((n: number): Scalar => to.Scalar(1 / n))

const harmonicSeriesPitches: Scalar[] = numbers.map((n: number): Scalar => to.Scalar(n))

export {
    subharmonicSeriesPitches,
    harmonicSeriesPitches,
}
