import { Scalar } from '@musical-patterns/utilities'
import { Scale } from '../compile'

const scaleFromScalarsAndScalar: (scalars: Scalar[], patternPitchScalar: Scalar) => Scale =
    (scalars: Scalar[], patternPitchScalar: Scalar): Scale => ({
        scalar: patternPitchScalar,
        scalars,
    })

export {
    scaleFromScalarsAndScalar,
}
