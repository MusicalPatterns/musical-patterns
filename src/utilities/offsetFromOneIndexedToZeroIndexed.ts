import { apply, Index, to } from '@musical-patterns/utilities'

const offsetFromOneIndexedToZeroIndexed: (index: Index) => Index =
    (index: Index): Index =>
        apply.Offset(index, to.Offset(-1))

export {
    offsetFromOneIndexedToZeroIndexed,
}
