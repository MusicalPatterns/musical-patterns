import shiftCents from '../../src/shiftCents'

describe('shift cents', () => {
    it('gives the number of cents required to shift by to change from the first frequency to the second', () => {
        expect(shiftCents(523.25, 4186)).toEqual(3600)
    })
})
