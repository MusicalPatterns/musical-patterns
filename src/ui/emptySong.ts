import { defaultSongCompile } from '../compile/defaultSongCompile'
import { Song, SongName } from '../songTypes'
import * as to from '../utilities/to'

const emptySong: Song = {
    compile: defaultSongCompile,
    config: {
        baseFrequency: to.Frequency(0),
        durationScalar: to.Scalar(1),
    },
    description: '',
    entityConfigs: [],
    formattedName: '',
    name: SongName._EMPTY_SONG,
    scales: [],
}

export {
    emptySong,
}
