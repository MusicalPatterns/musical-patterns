import { CENTS_PER_OCTAVE } from '../constants'
import { Cents, Frequency } from '../types'
import * as from from './from'
import * as to from './to'

const shiftCents: (frequencyOne: Frequency, frequencyTwo: Frequency) => Cents =
    (frequencyOne: Frequency, frequencyTwo: Frequency): Cents => {
        const logarithmicShift: number = Math.log2(from.Frequency(frequencyTwo) / from.Frequency(frequencyOne))

        return to.Cents(from.Cents(CENTS_PER_OCTAVE) * logarithmicShift)
    }

export default shiftCents
