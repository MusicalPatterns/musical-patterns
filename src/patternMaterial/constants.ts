// tslint:disable no-magic-numbers

import { Index, Offset, Scalar, to } from '@musical-patterns/utilities'

const FULL_GAIN: Scalar = to.Scalar(1)

const DEFAULT_SCALAR_FOR_ALMOST_FULL_SUSTAIN: Scalar = to.Scalar(0.9)
const DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN: Offset = to.Offset(-0.1)

const DEFAULT_DURATION_SCALAR: Scalar = to.Scalar(700)
const DEFAULT_DURATIONS_SCALE_INDEX: Index = to.Index(1)
const DEFAULT_PITCH_SCALE_INDEX: Index = to.Index(2)

export {
    DEFAULT_SCALAR_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    FULL_GAIN,
    DEFAULT_DURATION_SCALAR,
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
}
