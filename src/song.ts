import { beatenPath } from '../songs/beaten-path/src/songs'
import { hafuhafu, hafuhafuWithPitchCircularity } from '../songs/hafuhafu/src/songs'
import { xeltDleudefAetNaelnaemeugz } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/songs'
import { zdaubyaos } from '../songs/zdaubyaos/src/songs'
import { Song, SongID } from './songTypes'

const songs: {[index: string]: Song} = {
    [SongID.BEATEN_PATH]: beatenPath,
    [SongID.HAFUHAFU]: hafuhafu,
    [SongID.HAFUHAFU_WITH_PITCH_CIRCULARITY]: hafuhafuWithPitchCircularity,
    [SongID.XELT_DLEUDEF_AET_NAELNAEMEUGZ]: xeltDleudefAetNaelnaemeugz,
    [SongID.ZDAUBYAOS]: zdaubyaos,
}

export {
    songs,
}
