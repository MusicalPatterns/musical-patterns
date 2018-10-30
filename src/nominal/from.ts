// tslint:disable:variable-name no-any

import {
    Base,
    Block,
    Cents,
    Count,
    Frequency,
    Index,
    Offset,
    Power,
    Scalar,
    Semitones,
    SumOfIndices,
    SumOfScalars,
    Time,
} from './types'

const Block: (block: Array<Index | number> | Index[]) => number[] =
    (block: Array<Index | number> | Index[]): number[] => block as any

const Cents: (cents: Cents) => number =
    (cents: Cents): number => cents as any

const Count: (count: Count) => number =
    (count: Count): number => count as any

const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number => frequency as any

const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number => semitones as any

const Scalar: (scalar: Scalar) => number =
    (scalar: Scalar): number => scalar as any

const SumOfScalars: (sumOfScalars: SumOfScalars) => number =
    (sumOfScalars: SumOfScalars): number => sumOfScalars as any

const Offset: (offset: Offset) => number =
    (offset: Offset): number => offset as any

const Power: (power: Power) => number =
    (power: Power): number => power as any

const Base: (base: Base) => number =
    (base: Base): number => base as any

const Time: (time: Time) => number =
    (time: Time): number => time as any

const Index: (index: Index) => number =
    (index: Index): number => index as any

const SumOfIndices: (sumOfIndices: SumOfIndices) => number =
    (sumOfIndices: SumOfIndices): number => sumOfIndices as any

export {
    Base,
    Block,
    Cents,
    Count,
    Frequency,
    Semitones,
    Scalar,
    Offset,
    Power,
    Time,
    Index,
    SumOfIndices,
    SumOfScalars,
}
