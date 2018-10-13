import * as cents from '../../../src/utilities/cents'
import { Cents } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'

describe('cents', () => {
    describe('#pitchToCents', () => {
        it('gives the cents value of the pitch', () => {
            const actual: Cents = cents.pitchToCents(to.Scalar(3 / 2))

            expect(actual).toEqual(to.Cents(701.9550008653874))
        })
    })

    describe('#centsToShiftFromOneFrequencyToAnother', () => {
        it('gives the number of cents required to shift by to change from the first frequency to the second', () => {
            const actual: Cents = cents.centsToShiftFromOneFrequencyToAnother(to.Frequency(523.25), to.Frequency(4186))

            expect(actual).toEqual(to.Cents(3600))
        })
    })
})
