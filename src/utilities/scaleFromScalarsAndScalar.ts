import { Scale } from '../compile'
import { Scalar } from '../nominal'

const scaleFromScalarsAndScalar: (scalars: Scalar[], patternPitchScalar: Scalar) => Scale =
    (scalars: Scalar[], patternPitchScalar: Scalar): Scale => ({
        scalar: patternPitchScalar,
        scalars,
    })

export {
    scaleFromScalarsAndScalar,
}
