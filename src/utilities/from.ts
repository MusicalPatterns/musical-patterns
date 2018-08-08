// tslint:disable:variable-name no-any

import { Cents, Frequency, Offset, Scalar, Semitones } from './nominalTypes'

const Cents: (cents: Cents) => number =
    (cents: Cents): number => cents as any

const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number => frequency as any

const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number => semitones as any

const Scalar: (scalar: Scalar) => number =
    (scalar: Scalar): number => scalar as any

const Offset: (offset: Offset) => number =
    (offset: Offset): number => offset as any

export {
    Cents,
    Frequency,
    Semitones,
    Scalar,
    Offset,
}
