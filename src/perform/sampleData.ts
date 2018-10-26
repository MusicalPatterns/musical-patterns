// tslint:disable:no-magic-numbers

import { CENTS_PER_SEMITONE } from '../constants'
import { Cents, from, Semitones, to } from '../nominal'
import { SampleName } from '../types'
import { SampleData } from './types'

const shiftSemitones: (semitones: Semitones) => Cents = (semitones: Semitones): Cents =>
    to.Cents(from.Semitones(semitones) * from.Cents(CENTS_PER_SEMITONE))

const sampleData: { [x in SampleName]: SampleData } = {
    [SampleName.CELLO]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [SampleName.DOUBLEBASS]: {
        centsAdjustment: shiftSemitones(to.Semitones(24)),
    },
    [SampleName.FLUTE]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [SampleName.PIANO]: {
        centsAdjustment: shiftSemitones(to.Semitones(-24)),
    },
    [SampleName.TROMBONE]: {
        centsAdjustment: shiftSemitones(to.Semitones(2)),
    },
    [SampleName.TRUMPET]: {
        centsAdjustment: shiftSemitones(to.Semitones(-1)),
    },
    [SampleName.TUBA]: {
        centsAdjustment: shiftSemitones(to.Semitones(12)),
    },
    [SampleName.VIOLIN]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [SampleName.SNARE]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [SampleName.KICK]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
    [SampleName.HIHAT]: {
        centsAdjustment: shiftSemitones(to.Semitones(0)),
    },
}

export {
    sampleData,
}
