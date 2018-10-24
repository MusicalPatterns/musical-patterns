import { octaveSeriesScale } from '../../src/scales'
import * as to from '../../src/utilities/to'

describe('scales', () => {
    it('octave series scale\'s scalars increase by factor of 2 each step', () => {
        expect(octaveSeriesScale.scalars[0]).toEqual(to.Scalar(1))
        expect(octaveSeriesScale.scalars[1]).toEqual(to.Scalar(2))
        expect(octaveSeriesScale.scalars[2]).toEqual(to.Scalar(4))
        expect(octaveSeriesScale.scalars[3]).toEqual(to.Scalar(8))
        expect(octaveSeriesScale.scalars[4]).toEqual(to.Scalar(16))
        expect(octaveSeriesScale.scalars[5]).toEqual(to.Scalar(32))
    })
})
