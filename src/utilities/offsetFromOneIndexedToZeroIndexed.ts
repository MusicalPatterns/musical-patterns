import { Index, to } from '@musical-patterns/utilities'
import { applyOffset } from './applyOffset'

const offsetFromOneIndexedToZeroIndexed: (index: Index) => Index =
    (index: Index): Index =>
        applyOffset(index, to.Offset(-1))

export {
    offsetFromOneIndexedToZeroIndexed,
}
