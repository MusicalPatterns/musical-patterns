import { defaultCompileSong } from '../../src/compile/defaultCompileSong'
import { SongID, SongSpec } from '../../src/songTypes'
import * as to from '../../src/utilities/to'

const mockSongSpec: SongSpec = {
    compile: defaultCompileSong,
    config: {
        baseFrequency: to.Frequency(0),
        durationScalar: to.Scalar(1),
    },
    entitySpecs: [],
    scales: [],
    songId: SongID._EMPTY_SONG,
}

export {
    mockSongSpec,
}
