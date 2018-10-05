import { Core } from '../songs/beaten-path/src/types'
import { EntityConfig } from './compile/types'
import { Entities, Scales } from './types'
import { Frequency } from './utilities/nominalTypes'

enum SongName {
    BEATEN_PATH = 'beaten path',
    HAFUHAFU = 'hafuhafu',
    HAFUHAFU_WITH_PITCH_CIRCULARITY = 'hafuhafu with pitch circularity',
    STEPWISE = 'stepwise',
    XELT_DLEUDEF_AET_NAELNAEMEUGZ = 'xelt dleudef aet ñaelnaemeugz',
    ZDAUBYAOS = 'zdaubyaos',
}

interface CustomConfig {
    [index: string]: Core,
}

type CustomConfigEntry = [string, Core]

interface StandardConfig {
    [index: string]: Frequency,
}

type StandardConfigEntry = [string, Frequency]

interface Song {
    compile: (song: Song) => Promise<Entities>,
    customConfig: CustomConfig,
    entityConfigs: EntityConfig[],
    formattedName: string,
    name: SongName,
    scales: Scales,
    standardConfig: StandardConfig,
}

export {
    Song,
    SongName,
    StandardConfig,
    StandardConfigEntry,
    CustomConfig,
    CustomConfigEntry,
}
