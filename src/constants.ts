// tslint:disable no-magic-numbers

import { Count, Index, Offset, Power, Scalar, to } from './nominal'

const FULL_GAIN: Scalar = to.Scalar(1)

const DEFAULT_SCALAR_FOR_ALMOST_FULL_SUSTAIN: Scalar = to.Scalar(0.9)
const DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN: Offset = to.Offset(-0.1)

const EVEN: number = 2

const ONCE: Count = to.Count(1)
const TWICE: Count = to.Count(2)

const SQUARED: Power = to.Power(2)
const SQUARE_ROOT: Power = to.Power(1 / 2)

const INITIAL: Index = to.Index(0)

const EVERY_OTHER: Scalar = to.Scalar(2)

const OCTAVE: Scalar = to.Scalar(2)
const TRITAVE: Scalar = to.Scalar(3)

const DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR: Scalar = to.Scalar(1)
const DEFAULT_RAW_TIME_TYPE_DURATION_SCALAR: Scalar = to.Scalar(100)
const DEFAULT_DURATIONS_SCALE_INDEX: Index = to.Index(1)
const DEFAULT_PITCH_SCALE_INDEX: Index = to.Index(2)

const INCLUSIVE: Offset = to.Offset(1)

export {
    DEFAULT_SCALAR_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    FULL_GAIN,
    EVEN,
    OCTAVE,
    TRITAVE,
    DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    DEFAULT_RAW_TIME_TYPE_DURATION_SCALAR,
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
    EVERY_OTHER,
    INCLUSIVE,
    INITIAL,
    ONCE,
    TWICE,
    SQUARED,
    SQUARE_ROOT,
}
