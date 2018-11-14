import { ContourElement, ContourPiece, to } from './nominal'
import { DictionaryOf } from './utilities'

const unpackContourElement: (contourElement: ContourElement) => DictionaryOf<number> =
    (contourElement: ContourElement): DictionaryOf<number> => ({
        duration: contourElement[ 1 ],
        pitch: contourElement[ 0 ],
    })

const calculateTotalContourDuration: (notes: ContourPiece) => number =
    (notes: ContourPiece): number =>
        notes.reduce(
            (accumulator: number, contourElement: ContourElement) => {
                const { duration } = unpackContourElement(contourElement)

                return accumulator + duration
            },
            0,
        )

const rest: (duration: number) => ContourPiece =
    (duration: number): ContourPiece =>
        to.ContourPiece([ [ 0, duration ] ])

export {
    calculateTotalContourDuration,
    unpackContourElement,
    rest,
}
