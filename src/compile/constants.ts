// tslint:disable:no-magic-numbers

import { Frequency, Scalar, to } from '../nominal'

const BASE_SAMPLE_GAIN: Scalar = to.Scalar(0.25)
const STANDARDIZED_SAMPLE_PITCH_OF_C5: Frequency = to.Frequency(523.25)

const BASE_GAIN: Scalar = to.Scalar(0.1)
const SILENT_GAIN: Scalar = to.Scalar(0)

export {
    BASE_SAMPLE_GAIN,
    STANDARDIZED_SAMPLE_PITCH_OF_C5,
    BASE_GAIN,
    SILENT_GAIN,
}
