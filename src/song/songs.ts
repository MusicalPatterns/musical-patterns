import {
    beatenPathSong,
    BeatenPathSongSpec,
    hafuhafuSong,
    HafuhafuSongSpec,
    hafuhafuWithPitchCircularitySong,
    stepwiseSong,
    xeltSong,
    zdaubyaosSong,
} from '../../songs'
import { emptySong } from '../ui'
import { BaseSongSpec, ForEverySongId, Song } from './types'

// tslint:disable-next-line:no-type-definitions-outside-types-modules
type SongSpec = BaseSongSpec |
    BeatenPathSongSpec |
    HafuhafuSongSpec

// tslint:disable-next-line:no-type-definitions-outside-types-modules
enum SongID {
    _EMPTY_SONG = '',
    BEATEN_PATH = 'beaten path',
    HAFUHAFU = 'hafuhafu',
    HAFUHAFU_WITH_PITCH_CIRCULARITY = 'hafuhafu with pitch circularity',
    STEPWISE = 'stepwise',
    XELT = 'xelt dleudef aet ñaelnaemeugz',
    ZDAUBYAOS = 'defaultZdaubyaosSongSpec',
}

const songs: ForEverySongId<Song> = {
    [ SongID._EMPTY_SONG ]: emptySong,
    [ SongID.BEATEN_PATH ]: beatenPathSong,
    [ SongID.HAFUHAFU ]: hafuhafuSong,
    [ SongID.HAFUHAFU_WITH_PITCH_CIRCULARITY ]: hafuhafuWithPitchCircularitySong,
    [ SongID.STEPWISE ]: stepwiseSong,
    [ SongID.XELT ]: xeltSong,
    [ SongID.ZDAUBYAOS ]: zdaubyaosSong,
}

export {
    SongID,
    SongSpec,
    songs,
}
