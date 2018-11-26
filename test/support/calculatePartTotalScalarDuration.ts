import { from, Scalar, SumOfScalars, to } from '@musical-patterns/shared'
import { NoteSpec, PartSpec } from '../../src/indexForTest'

const calculatePartTotalScalarDuration: (partSpec: PartSpec) => SumOfScalars =
    (partSpec: PartSpec): SumOfScalars =>
        partSpec.reduce(
            (accumulator: SumOfScalars, { durationSpec }: NoteSpec) => {
                const durationScalar: Scalar = durationSpec && durationSpec.scalar || to.Scalar(0)

                return to.SumOfScalars(from.SumOfScalars(accumulator) + from.Scalar(durationScalar))
            },
            to.SumOfScalars(0),
        )

export {
    calculatePartTotalScalarDuration,
}
