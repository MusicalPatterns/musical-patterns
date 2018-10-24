import { BaseSongSpec } from '../../src/songTypes'
import * as to from '../../src/utilities/to'

const mockSongSpec: BaseSongSpec = {
    songDurationScalar: to.Scalar(1),
    songPitchScalar: to.Scalar(0),
}

export {
    mockSongSpec,
}
