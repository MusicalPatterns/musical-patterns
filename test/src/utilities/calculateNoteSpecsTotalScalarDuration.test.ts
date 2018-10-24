import { NoteSpecs } from '../../../src/compile/types'
import calculateNoteSpecsTotalScalarDuration from '../../../src/utilities/calculateNoteSpecsTotalScalarDuration'
import * as from from '../../../src/utilities/from'
import * as to from '../../../src/utilities/to'

describe('calculate note specs total scalar duration', () => {
    it('totals the durations of the notes', () => {
        const noteSpecs: NoteSpecs = [
            {
                durationSpec: {
                    scalar: to.Scalar(3),
                },
            },
            {
                durationSpec: {
                    scalar: to.Scalar(4),
                },
            },
            {
                durationSpec: {
                    scalar: to.Scalar(3),
                },
            },
        ]

        expect(from.Scalar(calculateNoteSpecsTotalScalarDuration(noteSpecs))).toBe(10)
    })
})
