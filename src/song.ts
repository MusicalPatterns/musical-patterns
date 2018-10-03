import { beatenPath } from '../songs/beaten-path/src/songs'
import { hafuhafu } from '../songs/hafuhafu/src/songs'
import { xeltDleudefAetNaelnaemeugz } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/songs'
import { zdaubyaos } from '../songs/zdaubyaos/src/songs'
import { Song } from './types'

enum SongName {
    BEATEN_PATH = 'beaten path',
    HAFUHAFU = 'hafuhafu',
    XELT_DLEUDEF_AET_NAELNAEMEUGZ = 'xelt dleudef aet ñaelnaemeugz',
    ZDAUBYAOS = 'zdaubyaos',
}

const songs: {[index: string]: Song} = {
    [SongName.BEATEN_PATH]: beatenPath,
    [SongName.HAFUHAFU]: hafuhafu,
    [SongName.XELT_DLEUDEF_AET_NAELNAEMEUGZ]: xeltDleudefAetNaelnaemeugz,
    [SongName.ZDAUBYAOS]: zdaubyaos,
}

export {
    songs,
    SongName,
}
