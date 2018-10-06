import { defaultSongCompile } from '../../src/compile/defaultSongCompile'
import { Song, SongName } from '../../src/songTypes'
import * as to from '../../src/utilities/to'

const mockSong: Song = {
    compile: defaultSongCompile,
    customConfig: {},
    description: '',
    entityConfigs: [],
    formattedName: '',
    name: SongName.XELT_DLEUDEF_AET_NAELNAEMEUGZ,
    scales: [],
    standardConfig: {
        baseFrequency: to.Frequency(0),
    },
}

export {
    mockSong,
}
