// tslint:disable no-magic-numbers

import { Cents, Count, Scalar, to } from '../nominal'

const CENTS_PER_OCTAVE: Cents = to.Cents(1200)
const DECIMAL: number = 10
const HALF: Scalar = to.Scalar(1 / 2)
const DEFAULT_PRECISION: number = 2
const A_SUFFICIENT_COUNT_OF_NUMBERS: Count = to.Count(Math.pow(2, 16))

export {
    CENTS_PER_OCTAVE,
    DECIMAL,
    HALF,
    DEFAULT_PRECISION,
    A_SUFFICIENT_COUNT_OF_NUMBERS,
}
