import { EntityConfigs } from './compile/types'
import { Entities, Scales } from './types'
import { Frequency, Scalar } from './utilities/nominalTypes'

enum SongID {
    _EMPTY_SONG = '',
    BEATEN_PATH = 'beaten path',
    HAFUHAFU = 'hafuhafuSongConfig',
    HAFUHAFU_WITH_PITCH_CIRCULARITY = 'hafuhafuSongConfig with pitch circularity',
    STEPWISE = 'stepwiseSongConfig',
    XELT_DLEUDEF_AET_NAELNAEMEUGZ = 'xelt dleudef aet ñaelnaemeugz',
    ZDAUBYAOS = 'zdaubyaosSongConfig',
}

interface Config {
    baseFrequency: Frequency,
    durationScalar: Scalar,
    // tslint:disable-next-line:no-any
    [index: string]: any,
}

interface SongConfig {
    compile: (songConfig: SongConfig) => Promise<Song>,
    config: Config,
    entityConfigs: EntityConfigs,
    scales: Scales,
    songId: SongID,
}

interface Song {
    entities: Entities,
    songId: SongID,
}

interface SongMetadata {
    description: string,
    formattedName: string,
    songId: SongID,
}

export {
    Song,
    SongConfig,
    SongID,
    Config,
    SongMetadata,
}
