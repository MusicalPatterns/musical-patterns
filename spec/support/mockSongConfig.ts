import { defaultSongCompile } from '../../src/compile/defaultSongCompile'
import { SongConfig, SongID } from '../../src/songTypes'
import * as to from '../../src/utilities/to'

const mockSongConfig: SongConfig = {
    compile: defaultSongCompile,
    config: {
        baseFrequency: to.Frequency(0),
        durationScalar: to.Scalar(1),
    },
    entityConfigs: [],
    scales: [],
    songId: SongID._EMPTY_SONG,
}

export {
    mockSongConfig,
}
