import { calculateTotalContourDuration, ContourPiece, to } from '../../../src/indexForTest'

describe('calculate total contour duration', () => {
    it('totals the durations of the contour', () => {
        const contour: ContourPiece = to.ContourPiece([
            [ 1, 3 ], [ 0, 4 ], [ 7, 3 ],
        ])

        expect(calculateTotalContourDuration(contour))
            .toBe(10)
    })
})
