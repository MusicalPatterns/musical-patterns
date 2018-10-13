import { EntitySpecs } from './compile/types'
import { Entities, Scales } from './types'
import { Frequency, Scalar } from './utilities/nominalTypes'

enum SongID {
    _EMPTY_SONG = '',
    BEATEN_PATH = 'beaten path',
    HAFUHAFU = 'hafuhafu',
    HAFUHAFU_WITH_PITCH_CIRCULARITY = 'hafuhafu with pitch circularity',
    STEPWISE = 'stepwiseSongSpec',
    XELT_DLEUDEF_AET_NAELNAEMEUGZ = 'xelt dleudef aet ñaelnaemeugz',
    ZDAUBYAOS = 'zdaubyaosSongSpec',
}

interface Config {
    baseFrequency: Frequency,
    durationScalar: Scalar,
    // tslint:disable-next-line:no-any
    [index: string]: any,
}

interface SongSpec {
    compile: (songSpec: SongSpec) => Promise<Song>,
    config: Config,
    entitySpecs: EntitySpecs,
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
    SongSpec,
    SongID,
    Config,
    SongMetadata,
}
