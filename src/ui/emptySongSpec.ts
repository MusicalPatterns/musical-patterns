import { defaultCompileSong } from '../compile/defaultCompileSong'
import { SongID, SongSpec } from '../songTypes'
import * as to from '../utilities/to'

const emptySongSpec: SongSpec = {
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
    emptySongSpec,
}
