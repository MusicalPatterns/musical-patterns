import applyOffset from './applyOffset'
import { Index } from './nominalTypes'
import * as to from './to'

const shiftFromOneIndexedToZeroIndexed: (index: Index) => Index =
    (index: Index): Index =>
        applyOffset(index, to.Offset(-1))

export default shiftFromOneIndexedToZeroIndexed
