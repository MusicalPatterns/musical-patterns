// tslint:disable:variable-name no-any

import {
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

const Cents: (cents: number) => Cents =
    (cents: number): Cents => cents as any

const Count: (count: number) => Count =
    (count: number): Count => count as any

const Frequency: (frequency: number) => Frequency =
    (frequency: number): Frequency => frequency as any

const Semitones: (semitones: number) => Semitones =
    (semitones: number): Semitones => semitones as any

const Scalar: (scalar: number) => Scalar =
    (scalar: number): Scalar => scalar as any

const SumOfScalars: (sumOfScalars: number) => SumOfScalars =
    (sumOfScalars: number): SumOfScalars => sumOfScalars as any

const Offset: (offset: number) => Offset =
    (offset: number): Offset => offset as any

const Power: (power: number) => Power =
    (power: number): Power => power as any

const Time: (duration: number) => Time =
    (duration: number): Time => duration as any

const Index: (index: number) => Index =
    (index: number): Index => index as any

const SumOfIndices: (sumOfIndices: number) => SumOfIndices =
    (sumOfIndices: number): SumOfIndices => sumOfIndices as any

export {
    Cents,
    Count,
    Frequency,
    Semitones,
    Scalar,
    Offset,
    Power,
    Time,
    Index,
    SumOfScalars,
    SumOfIndices,
}
