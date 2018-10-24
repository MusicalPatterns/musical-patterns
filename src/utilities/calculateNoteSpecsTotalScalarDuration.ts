import { NoteSpec, NoteSpecs } from '../compile/types'
import * as from from './from'
import { Scalar, SumOfScalars } from './nominalTypes'
import * as to from './to'

const calculateNoteSpecsTotalScalarDuration: (noteSpecs: NoteSpecs) => SumOfScalars =
    (noteSpecs: NoteSpecs): SumOfScalars =>
        noteSpecs.reduce(
            (m: SumOfScalars, { durationSpec }: NoteSpec) => {
                const durationScalar: Scalar = durationSpec && durationSpec.scalar || to.Scalar(0)

                return to.SumOfScalars(from.SumOfScalars(m) + from.Scalar(durationScalar))
            },
            to.SumOfScalars(0),
        )

export default calculateNoteSpecsTotalScalarDuration
