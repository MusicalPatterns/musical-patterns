// tslint:disable no-magic-numbers

import { Index } from './index'
import { Cents, Count, Offset, Scalar, to } from './nominal'

const BASE_DURATION: Scalar = to.Scalar(7)

const BASE_GAIN: Scalar = to.Scalar(0.1)
const SILENT_GAIN: Scalar = to.Scalar(0)
const FULL_GAIN: Scalar = to.Scalar(1)

const DEFAULT_SCALAR_FOR_ALMOST_FULL_SUSTAIN: Scalar = to.Scalar(0.9)
const DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN: Offset = to.Offset(-0.1)

const CENTS_PER_OCTAVE: Cents = to.Cents(1200)
const CENTS_PER_SEMITONE: Cents = to.Cents(100)

const EVEN: number = 2
const DECIMAL: number = 10

const INITIAL: Index = to.Index(0)

const HALF: Scalar = to.Scalar(1 / 2)
const EVERY_OTHER: Scalar = to.Scalar(2)

const OCTAVE: Scalar = to.Scalar(2)
const TRITAVE: Scalar = to.Scalar(3)

const DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR: Scalar = to.Scalar(1)
const DEFAULT_RAW_TIME_TYPE_DURATION_SCALAR: Scalar = to.Scalar(100)
const DEFAULT_DURATIONS_SCALE_INDEX: Index = to.Index(1)
const DEFAULT_PITCH_SCALE_INDEX: Index = to.Index(2)

const DEFAULT_PRECISION: number = 2

const INCLUSIVE: Offset = to.Offset(1)

const A_SUFFICIENT_COUNT_OF_NUMBERS: Count = to.Count(Math.pow(2, 16))

export {
    BASE_DURATION,
    BASE_GAIN,
    SILENT_GAIN,
    DEFAULT_SCALAR_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    FULL_GAIN,
    EVEN,
    DECIMAL,
    OCTAVE,
    TRITAVE,
    DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    DEFAULT_RAW_TIME_TYPE_DURATION_SCALAR,
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
    HALF,
    EVERY_OTHER,
    DEFAULT_PRECISION,
    INCLUSIVE,
    A_SUFFICIENT_COUNT_OF_NUMBERS,
    INITIAL,
}
