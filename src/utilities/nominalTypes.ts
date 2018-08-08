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

interface Offset extends Number {
    _OffsetBrand: string,
}

interface Time extends Number {
    _TimeBrand: string,
}

interface Index extends Number {
    _IndexBrand: string,
}

export {
    Cents,
    Frequency,
    Semitones,
    Scalar,
    Offset,
    Time,
    Index,
}
