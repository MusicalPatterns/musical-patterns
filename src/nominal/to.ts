// tslint:disable:variable-name no-any

import { ContourElement } from '../types'
import {
    Base,
    Block,
    Cents,
    ContourPiece,
    ContourWhole,
    Coordinate,
    CoordinateElement,
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
const Base: (offset: number) => Base =
    (base: number): Base => base as any
const Power: (power: number) => Power =
    (power: number): Power => power as any
const Time: (duration: number) => Time =
    (duration: number): Time => duration as any
const Index: (index: number) => Index =
    (index: number): Index => index as any
const SumOfIndices: (sumOfIndices: number) => SumOfIndices =
    (sumOfIndices: number): SumOfIndices => sumOfIndices as any
const CoordinateElement: (coordinateElement: number) => CoordinateElement =
    (coordinateElement: number): CoordinateElement => coordinateElement as any

const Block: (block: Array<number | Index>) => Block =
    (block: Array<number | Index>): Block =>
        block.map((blockElement: Index | number): Index => blockElement as any) as any

const ContourPiece: (contourPiece: Array<number[] | ContourElement>) => ContourPiece =
    (contourPiece: Array<number[] | ContourElement>): ContourPiece =>
        contourPiece.map((contourElement: number[] | ContourElement): ContourElement =>
            contourElement as any) as any

const ContourWhole: (contourWhole: Array<number[] | ContourElement>) => ContourWhole =
    (contourWhole: Array<number[] | ContourElement>): ContourWhole =>
        contourWhole.map((contourElement: number[] | ContourElement): ContourElement =>
            contourElement as any) as any

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            coordinateElement as any) as any

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
    SumOfScalars,
    SumOfIndices,
    ContourPiece,
    ContourWhole,
    Coordinate,
    CoordinateElement,
}
