import { Cents, Frequency, from, Scalar, to } from '../nominal'
import { applyScale } from './applyScale'
import { CENTS_PER_OCTAVE } from './constants'

const centsToShiftFromOneFrequencyToAnother: (frequencyOne: Frequency, frequencyTwo: Frequency) => Cents =
    (frequencyOne: Frequency, frequencyTwo: Frequency): Cents => {
        const pitchRatio: Scalar = to.Scalar(from.Frequency(frequencyTwo) / from.Frequency(frequencyOne))

        return pitchToCents(pitchRatio)
    }

const pitchToCents: (pitch: Scalar) => Cents =
    (pitch: Scalar): Cents => {
        const octaveRepeatingPitchSpaceLogarithmicScalar: Scalar = to.Scalar(Math.log2(from.Scalar(pitch)))

        return applyScale(CENTS_PER_OCTAVE, octaveRepeatingPitchSpaceLogarithmicScalar)
    }

export {
    centsToShiftFromOneFrequencyToAnother,
    pitchToCents,
}
