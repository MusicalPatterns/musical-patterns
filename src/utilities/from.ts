// tslint:disable:variable-name no-any

import { Cents, Frequency, Semitones } from '../types'

const Cents: (cents: Cents) => number =
    (cents: Cents): number => cents as any

const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number => frequency as any

const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number => semitones as any

export {
    Cents,
    Frequency,
    Semitones,
}
