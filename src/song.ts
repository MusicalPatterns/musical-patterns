import { beatenPath } from '../songs/beaten-path/src/songs'
import { hafuhafu, hafuhafuWithPitchCircularity } from '../songs/hafuhafu/src/songs'
import { xeltDleudefAetNaelnaemeugz } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/songs'
import { zdaubyaos } from '../songs/zdaubyaos/src/songs'
import { Song, SongName } from './songTypes'

const songs: {[index: string]: Song} = {
    [SongName.BEATEN_PATH]: beatenPath,
    [SongName.HAFUHAFU]: hafuhafu,
    [SongName.HAFUHAFU_WITH_PITCH_CIRCULARITY]: hafuhafuWithPitchCircularity,
    [SongName.XELT_DLEUDEF_AET_NAELNAEMEUGZ]: xeltDleudefAetNaelnaemeugz,
    [SongName.ZDAUBYAOS]: zdaubyaos,
}

export {
    songs,
}
