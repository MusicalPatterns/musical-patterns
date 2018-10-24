import { NoteSpec, NoteSpecs } from '../compile/types'
import * as from from './from'
import { Scalar } from './nominalTypes'
import * as to from './to'

const calculateNoteSpecsTotalScalarDuration: (noteSpecs: NoteSpecs) => Scalar =
    (noteSpecs: NoteSpecs): Scalar =>
        noteSpecs.reduce(
            (m: Scalar, { durationSpec }: NoteSpec) =>
                to.Scalar(from.Scalar(m) + from.Scalar(durationSpec && durationSpec.scalar || to.Scalar(0))),
            to.Scalar(0),
        )

export default calculateNoteSpecsTotalScalarDuration
