// tslint:disable no-any no-magic-numbers

import { Cents, Scalar } from './utilities/nominalTypes'

const BASE_DURATION: number = 3
const BASE_GAIN: Scalar = 0.1 as any

const SILENT: Scalar = 0 as any
const PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES: number = 1
const SEPARATION_FOR_NEIGHBORING_NOTES: number = 0.1

const CENTS_PER_OCTAVE: Cents = 1200 as any
const CENTS_PER_SEMITONE: Cents = 100 as any

const MAX_GAIN: Scalar = 1 as any

export {
    BASE_DURATION,
    BASE_GAIN,
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SILENT,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    MAX_GAIN,
}
