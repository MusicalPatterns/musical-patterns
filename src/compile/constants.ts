// tslint:disable:no-magic-numbers

import { Frequency, Scalar, to } from '../nominal'

const BASE_SAMPLE_GAIN: Scalar = to.Scalar(0.25)
const AVERAGE_SAMPLE_PITCH_OF_C5: Frequency = to.Frequency(523.25)

export {
    BASE_SAMPLE_GAIN,
    AVERAGE_SAMPLE_PITCH_OF_C5,
}
