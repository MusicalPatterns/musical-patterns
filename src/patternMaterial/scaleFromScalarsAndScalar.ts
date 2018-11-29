import { Scalar, Scale } from '@musical-patterns/utilities'

const scaleFromScalarsAndScalar: (scalars: Scalar[], patternPitchScalar: Scalar) => Scale =
    (scalars: Scalar[], patternPitchScalar: Scalar): Scale => ({
        scalar: patternPitchScalar,
        scalars,
    })

export {
    scaleFromScalarsAndScalar,
}
