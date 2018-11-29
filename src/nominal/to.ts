// tslint:disable:variable-name no-any

import { Index } from '@musical-patterns/utilities'
import { Block, ContourElement, ContourPiece, ContourWhole } from './types'

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

export {
    Block,
    ContourPiece,
    ContourWhole,
}
