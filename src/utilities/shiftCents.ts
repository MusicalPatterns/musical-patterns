import { CENTS_PER_OCTAVE } from '../constants'

const shiftCents: (frequencyOne: number, frequencyTwo: number) => number =
    (frequencyOne: number, frequencyTwo: number): number =>
        CENTS_PER_OCTAVE * Math.log2(frequencyTwo / frequencyOne)

export default shiftCents
