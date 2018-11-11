import { ContourElement } from '../types'

interface Cents extends Number {
    _CentsBrand: string,
}

interface Frequency extends Number {
    _FrequencyBrand: string,
}

interface Semitones extends Number {
    _SemitonesBrand: string,
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

enum _ContourPieceBrand {}
type ContourPiece = _ContourPieceBrand & ContourElement[]

enum _ContourWholeBrand {}
type ContourWhole = _ContourWholeBrand & ContourElement[]

export {
    Base,
    Cents,
    Count,
    Frequency,
    Semitones,
    Scalar,
    Offset,
    Time,
    Index,
    Power,
    SumOfIndices,
    SumOfScalars,
    Block,
    ContourPiece,
    ContourWhole,
}
