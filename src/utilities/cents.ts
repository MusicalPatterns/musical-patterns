import { CENTS_PER_OCTAVE } from '../constants'
import * as from from './from'
import { Cents, Frequency, Scalar } from './nominalTypes'
import scale from './scale'
import * as to from './to'

const centsToShiftFromOneFrequencyToAnother: (frequencyOne: Frequency, frequencyTwo: Frequency) => Cents =
    (frequencyOne: Frequency, frequencyTwo: Frequency): Cents => {
        const pitchRatio: Scalar = to.Scalar(from.Frequency(frequencyTwo) / from.Frequency(frequencyOne))

        return pitchToCents(pitchRatio)
    }

const pitchToCents: (pitch: Scalar) => Cents =
    (pitch: Scalar): Cents => {
        const octaveRepeatingPitchSpaceLogarithmicScalar: Scalar = to.Scalar(Math.log2(from.Scalar(pitch)))

        return scale(CENTS_PER_OCTAVE, octaveRepeatingPitchSpaceLogarithmicScalar)
    }

export {
    centsToShiftFromOneFrequencyToAnother,
    pitchToCents,
}
