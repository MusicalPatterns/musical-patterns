import { Index } from '@musical-patterns/shared'

enum _BlockBrand {}

type Block = _BlockBrand & Index[]

type ContourElement = [ number, number ]

enum _ContourPieceBrand {}

type ContourPiece = _ContourPieceBrand & ContourElement[]

enum _ContourWholeBrand {}

type ContourWhole = _ContourWholeBrand & ContourElement[]

export {
    Block,
    ContourElement,
    ContourPiece,
    ContourWhole,
}
