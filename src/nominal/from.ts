// tslint:disable:variable-name no-any

import {
    Base,
    Block,
    CoordinateElement,
    Count,
    Index,
    Offset,
    Power,
    Scalar,
    SumOfIndices,
    SumOfScalars,
    Time,
} from './types'

const Block: (block: Array<Index | number> | Index[]) => number[] =
    (block: Array<Index | number> | Index[]): number[] => block as any

const Count: (count: Count) => number =
    (count: Count): number => count as any

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

const CoordinateElement: (coordinateElement: CoordinateElement) => number =
    (coordinateElement: CoordinateElement): number => coordinateElement as any

export {
    Base,
    Block,
    Count,
    Scalar,
    Offset,
    Power,
    Time,
    Index,
    SumOfIndices,
    SumOfScalars,
    CoordinateElement,
}
