import { BaseSongSpec, to } from '../../src/indexForTest'

const mockSongSpec: BaseSongSpec = {
    songDurationScalar: to.Scalar(1),
    songPitchScalar: to.Scalar(0),
}

export {
    mockSongSpec,
}
