import { Index } from '@musical-patterns/utilities'
import { PartSpec } from '../compile'

enum _BlockBrand {}

type Block = _BlockBrand & Index[]

type ContourElement = [ number, number ]

enum _ContourPieceBrand {}

type ContourPiece = _ContourPieceBrand & ContourElement[]

enum _ContourWholeBrand {}

type ContourWhole = _ContourWholeBrand & ContourElement[]

type Segment = PartSpec[]

export {
    Block,
    ContourElement,
    Segment,
    ContourPiece,
    ContourWhole,
}
