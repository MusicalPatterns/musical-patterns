import { beatenPathSongMetadata } from '../songs/beaten-path/src/metadata'
import { beatenPathSongConfig } from '../songs/beaten-path/src/songs'
import { hafuhafuSongMetadata, hafuhafuWithPitchCircularitySongMetadata } from '../songs/hafuhafu/src/metadata'
import { hafuhafuSongConfig, hafuhafuWithPitchCircularitySongConfig } from '../songs/hafuhafu/src/songs'
import { xeltDleudefAetNaelnaemeugzSongMetadata } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/metadata'
import { xeltDleudefAetNaelnaemeugzSongConfig } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/songs'
import { zdaubyaosSongMetadata } from '../songs/zdaubyaos/src/metadata'
import { zdaubyaosSongConfig } from '../songs/zdaubyaos/src/songs'
import { SongConfig, SongID, SongMetadata } from './songTypes'

const songConfigs: {[index: string]: SongConfig} = {
    [SongID.BEATEN_PATH]: beatenPathSongConfig,
    [SongID.HAFUHAFU]: hafuhafuSongConfig,
    [SongID.HAFUHAFU_WITH_PITCH_CIRCULARITY]: hafuhafuWithPitchCircularitySongConfig,
    [SongID.XELT_DLEUDEF_AET_NAELNAEMEUGZ]: xeltDleudefAetNaelnaemeugzSongConfig,
    [SongID.ZDAUBYAOS]: zdaubyaosSongConfig,
}

const songMetadata: {[index: string]: SongMetadata} = {
    [SongID.BEATEN_PATH]: beatenPathSongMetadata,
    [SongID.HAFUHAFU]: hafuhafuSongMetadata,
    [SongID.HAFUHAFU_WITH_PITCH_CIRCULARITY]: hafuhafuWithPitchCircularitySongMetadata,
    [SongID.XELT_DLEUDEF_AET_NAELNAEMEUGZ]: xeltDleudefAetNaelnaemeugzSongMetadata,
    [SongID.ZDAUBYAOS]: zdaubyaosSongMetadata,
}

export {
    songConfigs,
    songMetadata,
}
