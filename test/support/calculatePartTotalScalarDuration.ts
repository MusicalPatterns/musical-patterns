import { from, NoteSpec, Part, Scalar, SumOfScalars, to } from '../../src/indexForTest'

const calculatePartTotalScalarDuration: (part: Part) => SumOfScalars =
    (part: Part): SumOfScalars =>
        part.reduce(
            (accumulator: SumOfScalars, { durationSpec }: NoteSpec) => {
                const durationScalar: Scalar = durationSpec && durationSpec.scalar || to.Scalar(0)

                return to.SumOfScalars(from.SumOfScalars(accumulator) + from.Scalar(durationScalar))
            },
            to.SumOfScalars(0),
        )

export {
    calculatePartTotalScalarDuration,
}
