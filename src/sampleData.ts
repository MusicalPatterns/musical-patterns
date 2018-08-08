// tslint:disable:no-magic-numbers

import { CENTS_PER_SEMITONE } from './constants'
import { Cents, Semitones, Timbre } from './types'
import * as from from './utilities/from'
import * as to from './utilities/to'

const shiftSemitones: (semitones: Semitones) => Cents = (semitones: Semitones): Cents =>
    to.Cents(from.Semitones(semitones) * from.Cents(CENTS_PER_SEMITONE))

interface SampleData {
    centsAdjustment: Cents,
}

const sampleData: { [x in Timbre]: SampleData } = {
    [Timbre.CELLO]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [Timbre.DOUBLEBASS]: {
        centsAdjustment: shiftSemitones(to.Semitones(24)),
    },
    [Timbre.FLUTE]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [Timbre.PIANO]: {
        centsAdjustment: shiftSemitones(to.Semitones(-24)),
    },
    [Timbre.TROMBONE]: {
        centsAdjustment: shiftSemitones(to.Semitones(2)),
    },
    [Timbre.TRUMPET]: {
        centsAdjustment: shiftSemitones(to.Semitones(-1)),
    },
    [Timbre.TUBA]: {
        centsAdjustment: shiftSemitones(to.Semitones(12)),
    },
    [Timbre.VIOLIN]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [Timbre.SNARE]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [Timbre.KICK]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [Timbre.HIHAT]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
}

export default sampleData
