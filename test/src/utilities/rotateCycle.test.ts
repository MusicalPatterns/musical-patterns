import { applyCycle, to } from '../../../src/indexForTest'

describe('applyCycle', () => {
    it('rotates a array cyclically', () => {
        expect(applyCycle([ 0, 1, 1, 0, 1 ], to.Offset(1)))
            .toEqual([ 1, 1, 0, 1, 0 ])
        expect(applyCycle([ 0, 1, 1, 0, 1 ], to.Offset(0)))
            .toEqual([ 0, 1, 1, 0, 1 ])
        expect(applyCycle([ 0, 1, 1, 0, 1 ], to.Offset(-1)))
            .toEqual([ 1, 0, 1, 1, 0 ])
    })
})
