// tslint:disable no-any no-magic-numbers

import { Cents, Offset, Scalar } from './utilities/nominalTypes'

const BASE_DURATION: Scalar = 7 as any
const BASE_GAIN: Scalar = 0.1 as any

const SILENT: Scalar = 0 as any
const SEPARATION_FOR_NEIGHBORING_NOTES: Offset = -0.1 as any

const CENTS_PER_OCTAVE: Cents = 1200 as any
const CENTS_PER_SEMITONE: Cents = 100 as any

const FULL_GAIN: Scalar = 1 as any

const ONE: number = 1
const TWO: number = 2
const DECIMAL: number = 10

const OCTAVE: Scalar = 2 as any

const DEFAULT_DURATION_SCALAR: Scalar = 1 as any

export {
    BASE_DURATION,
    BASE_GAIN,
    SILENT,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    FULL_GAIN,
    ONE,
    TWO,
    DECIMAL,
    OCTAVE,
    DEFAULT_DURATION_SCALAR,
}
