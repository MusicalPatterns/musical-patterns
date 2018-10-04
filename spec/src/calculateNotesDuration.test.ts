import { Notes } from '../../src/types'
import calculateNotesDuration from '../../src/utilities/calculateNotesDuration'
import * as from from '../../src/utilities/from'
import * as to from '../../src/utilities/to'

describe('calculate notes duration', () => {
    it('totals the durations of the notes', () => {
        const notes: Notes = [
            {
                duration: to.Time(3),
                gain: to.Scalar(1),
                pitchIndex: to.Index(1),
                pitchScalar: to.Scalar(1),
                scaleIndex: to.Index(0),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(4),
                gain: to.Scalar(1),
                pitchIndex: to.Index(1),
                pitchScalar: to.Scalar(1),
                scaleIndex: to.Index(0),
                sustain: to.Time(1),
            },
            {
                duration: to.Time(3),
                gain: to.Scalar(1),
                pitchIndex: to.Index(1),
                pitchScalar: to.Scalar(1),
                scaleIndex: to.Index(0),
                sustain: to.Time(1),
            },
        ]

        expect(from.Time(calculateNotesDuration(notes))).toBe(10)
    })
})
