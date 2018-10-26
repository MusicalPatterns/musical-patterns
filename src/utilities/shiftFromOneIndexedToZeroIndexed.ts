import { Index, to } from '../nominal'
import { applyOffset } from './applyOffset'

const shiftFromOneIndexedToZeroIndexed: (index: Index) => Index =
    (index: Index): Index =>
        applyOffset(index, to.Offset(-1))

export {
    shiftFromOneIndexedToZeroIndexed,
}
