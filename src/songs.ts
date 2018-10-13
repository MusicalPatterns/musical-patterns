import { beatenPathSongMetadata } from '../songs/beaten-path/src/metadata'
import { beatenPathSongSpec } from '../songs/beaten-path/src/songs'
import { hafuhafuSongMetadata, hafuhafuWithPitchCircularitySongMetadata } from '../songs/hafuhafu/src/metadata'
import { hafuhafuSongSpec, hafuhafuWithPitchCircularitySongSpec } from '../songs/hafuhafu/src/songs'
import { xeltDleudefAetNaelnaemeugzSongMetadata } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/metadata'
import { xeltDleudefAetNaelnaemeugzSongSpec } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/songs'
import { zdaubyaosSongMetadata } from '../songs/zdaubyaos/src/metadata'
import { zdaubyaosSongSpec } from '../songs/zdaubyaos/src/songs'
import { SongID, SongMetadata, SongSpec } from './songTypes'

const songSpecs: {[index: string]: SongSpec} = {
    [SongID.BEATEN_PATH]: beatenPathSongSpec,
    [SongID.HAFUHAFU]: hafuhafuSongSpec,
    [SongID.HAFUHAFU_WITH_PITCH_CIRCULARITY]: hafuhafuWithPitchCircularitySongSpec,
    [SongID.XELT_DLEUDEF_AET_NAELNAEMEUGZ]: xeltDleudefAetNaelnaemeugzSongSpec,
    [SongID.ZDAUBYAOS]: zdaubyaosSongSpec,
}

const songMetadata: {[index: string]: SongMetadata} = {
    [SongID.BEATEN_PATH]: beatenPathSongMetadata,
    [SongID.HAFUHAFU]: hafuhafuSongMetadata,
    [SongID.HAFUHAFU_WITH_PITCH_CIRCULARITY]: hafuhafuWithPitchCircularitySongMetadata,
    [SongID.XELT_DLEUDEF_AET_NAELNAEMEUGZ]: xeltDleudefAetNaelnaemeugzSongMetadata,
    [SongID.ZDAUBYAOS]: zdaubyaosSongMetadata,
}

export {
    songSpecs,
    songMetadata,
}
