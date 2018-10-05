import { EntityConfig } from './compile/types'
import { Config } from './interface/state'
import { Entity, Scale } from './types'
import { Frequency } from './utilities/nominalTypes'

enum SongName {
    BEATEN_PATH = 'beaten path',
    HAFUHAFU = 'hafuhafu',
    HAFUHAFU_WITH_PITCH_CIRCULARITY = 'hafuhafu with pitch circularity',
    STEPWISE = 'stepwise',
    XELT_DLEUDEF_AET_NAELNAEMEUGZ = 'xelt dleudef aet ñaelnaemeugz',
    ZDAUBYAOS = 'zdaubyaos',
}

interface Song {
    baseFrequency: Frequency,
    compile: (song: Song) => Promise<Entity[]>,
    config: Config,
    entityConfigs: EntityConfig[],
    formattedName: string,
    name: SongName,
    scales: Scale[],
}

export {
    Song,
    SongName,
}
