// tslint:disable no-any no-magic-numbers

import { Cents } from './utilities/nominalTypes'

const BASE_DURATION: number = 3
const BASE_GAIN: number = 0.1

const SILENT: number = 0
const PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES: number = 1
const SEPARATION_FOR_NEIGHBORING_NOTES: number = 0.1

const HARMONIC_SHIFT: number = 0

const CENTS_PER_OCTAVE: Cents = 1200 as any
const CENTS_PER_SEMITONE: Cents = 100 as any

export {
    BASE_DURATION,
    BASE_GAIN,
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SILENT,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    HARMONIC_SHIFT,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
}
