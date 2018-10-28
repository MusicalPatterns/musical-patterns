import * as songsRegister from './songsRegistry'
import { Song, Songs } from './types'

const songsAccumulator: Partial<Songs> = {}

const songs: Songs = Object.values(songsRegister)
    .reduce(
        (songsSoFar: Partial<Songs>, nextSong: Song): Partial<Songs> =>
            ({ ...songsSoFar, [ nextSong.songId ]: nextSong }),
        songsAccumulator,
    ) as Songs

export {
    songs,
}
