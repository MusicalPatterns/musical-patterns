import { beatenPathSong } from '../songs/beaten-path/src/songs'
import { BeatenPathSongSpec } from '../songs/beaten-path/src/songSpecs'
import { hafuhafuSong, hafuhafuWithPitchCircularitySong } from '../songs/hafuhafu/songs'
import { HafuhafuSongSpec } from '../songs/hafuhafu/src/songSpecs'
import { stepwiseSong } from '../songs/stepwise/src/songs'
import { xeltSong } from '../songs/xelt-dleudef-aet-naelnaemeugz/src/songs'
import { zdaubyaosSong } from '../songs/zdaubyaos/src/songs'
import { SongID } from './songIds'
import { BaseSongSpec, Song } from './songTypes'
import { emptySong } from './ui/emptySong'

type SongSpec = BaseSongSpec |
    BeatenPathSongSpec |
    HafuhafuSongSpec

type ForEverySongId<T> = {[P in SongID]: T}

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
    SongSpec,
    songs,
}
