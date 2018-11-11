import { ContourPiece, from, Index, to } from './nominal'
import { ContourElement } from './types'
import { DictionaryOf } from './utilities'

const unpackContourElement: (contourElement: ContourElement) => DictionaryOf<Index> =
    (contourElement: ContourElement): DictionaryOf<Index> => ({
        duration: contourElement[ 1 ],
        pitch: contourElement[ 0 ],
    })

const calculateTotalContourDuration: (notes: ContourPiece) => Index =
    (notes: ContourPiece): Index =>
        notes.reduce(
            (accumulator: Index, [ _, duration ]: ContourElement) =>
                to.Index(from.Index(accumulator) + from.Index(duration)),
            to.Index(0),
        )

const rest: (duration: Index) => ContourPiece =
    (duration: Index): ContourPiece =>
        to.ContourPiece([ [ to.Index(0), duration ] ])

export {
    calculateTotalContourDuration,
    unpackContourElement,
    rest,
}
