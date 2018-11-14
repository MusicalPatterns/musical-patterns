import { Part } from '../compile'

interface Frequency extends Number {
    _FrequencyBrand: string,
}

interface Scalar extends Number {
    _ScalarBrand: string,
}

interface SumOfScalars extends Number {
    _SumOfScalarsBrand: string,
}

interface Offset extends Number {
    _OffsetBrand: string,
}

interface Time extends Number {
    _TimeBrand: string,
}

interface Index extends Number {
    _IndexBrand: string,
}

interface SumOfIndices extends Number {
    _SumOfIndicesBrand: string,
}

interface Count extends Number {
    _CountBrand: string,
}

interface Base extends Number {
    _BaseBrand: string,
}

interface Power extends Number {
    _PowerBrand: string,
}

enum _BlockBrand {}
type Block = _BlockBrand & Index[]

type ContourElement = [ number, number ]

enum _ContourPieceBrand {}
type ContourPiece = _ContourPieceBrand & ContourElement[]

enum _ContourWholeBrand {}
type ContourWhole = _ContourWholeBrand & ContourElement[]

interface CoordinateElement extends Number {
    _CoordinateElementBrand: string,
}

type Coordinate = CoordinateElement[]

type Segment = Part[]

export {
    Base,
    Count,
    Frequency,
    Scalar,
    Offset,
    Time,
    Index,
    Power,
    SumOfIndices,
    SumOfScalars,
    Block,
    ContourElement,
    Segment,
    ContourPiece,
    ContourWhole,
    CoordinateElement,
    Coordinate,
}
