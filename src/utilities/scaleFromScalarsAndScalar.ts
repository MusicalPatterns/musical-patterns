import { Scalar } from '../nominal'
import { Scale } from '../types'

const scaleFromScalarsAndScalar: (scalars: Scalar[], patternPitchScalar: Scalar) => Scale =
    (scalars: Scalar[], patternPitchScalar: Scalar): Scale => ({
        scalar: patternPitchScalar,
        scalars,
    })

export {
    scaleFromScalarsAndScalar,
}
