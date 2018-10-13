import { defaultSongCompile } from '../compile/defaultSongCompile'
import { SongConfig, SongID } from '../songTypes'
import * as to from '../utilities/to'

const emptySongConfig: SongConfig = {
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
    emptySongConfig,
}
