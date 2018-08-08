// tslint:disable:variable-name no-any

import { Cents, Frequency, Semitones } from '../types'

const Cents: (cents: number) => Cents =
    (cents: number): Cents => cents as any

const Frequency: (frequency: number) => Frequency =
    (frequency: number): Frequency => frequency as any

const Semitones: (semitones: number) => Semitones =
    (semitones: number): Semitones => semitones as any

export {
    Cents,
    Frequency,
    Semitones,
}
