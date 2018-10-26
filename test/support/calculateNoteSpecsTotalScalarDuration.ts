import { from, NoteSpec, Scalar, SumOfScalars, to } from '../../src/indexForTest'

const calculateNoteSpecsTotalScalarDuration: (noteSpecs: NoteSpec[]) => SumOfScalars =
    (noteSpecs: NoteSpec[]): SumOfScalars =>
        noteSpecs.reduce(
            (m: SumOfScalars, { durationSpec }: NoteSpec) => {
                const durationScalar: Scalar = durationSpec && durationSpec.scalar || to.Scalar(0)

                return to.SumOfScalars(from.SumOfScalars(m) + from.Scalar(durationScalar))
            },
            to.SumOfScalars(0),
        )

export {
    calculateNoteSpecsTotalScalarDuration,
}
