import { defaultSongCompile } from '../../src/compile/defaultSongCompile'
import { defaultHandleConfigChange } from '../../src/interface/defaultHandleConfigChange'
import { Song, SongName } from '../../src/songTypes'
import * as to from '../../src/utilities/to'

const mockSong: Song = {
    compile: defaultSongCompile,
    config: {
        baseFrequency: to.Frequency(0),
        durationScalar: to.Scalar(1),
    },
    description: '',
    entityConfigs: [],
    formattedName: '',
    handleConfigChange: defaultHandleConfigChange,
    name: SongName.XELT_DLEUDEF_AET_NAELNAEMEUGZ,
    scales: [],
}

export {
    mockSong,
}
