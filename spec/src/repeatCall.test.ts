import repeatCall from '../../src/repeatCall'

describe('repeat call', () => {
    it('concats x copies of the array a function returns together', () => {
        const arrayFunction: () => number[] = () => [ 0, 1 ]
        expect(repeatCall(arrayFunction, 3)).toEqual([ 0, 1, 0, 1, 0, 1 ])
    })
})
