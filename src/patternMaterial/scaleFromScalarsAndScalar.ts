import { Scalar } from '@musical-patterns/shared'
import { Scale } from '../compile'

const scaleFromScalarsAndScalar: (scalars: Scalar[], patternPitchScalar: Scalar) => Scale =
    (scalars: Scalar[], patternPitchScalar: Scalar): Scale => ({
        scalar: patternPitchScalar,
        scalars,
    })

export {
    scaleFromScalarsAndScalar,
}
