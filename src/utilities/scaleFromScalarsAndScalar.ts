import { Scalar } from '../nominal'
import { Scale } from '../types'

const scaleFromScalarsAndScalar: (scalars: Scalar[], songPitchScalar: Scalar) => Scale =
    (scalars: Scalar[], songPitchScalar: Scalar): Scale => ({
        scalar: songPitchScalar,
        scalars,
    })

export {
    scaleFromScalarsAndScalar,
}
