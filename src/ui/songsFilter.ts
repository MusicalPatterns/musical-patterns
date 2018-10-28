import { filteredSongsRegistry, SongId, Songs } from '../../songs'
import { PartialSongs, SongsFilter } from './types'

const songsFilter: SongsFilter =
    (songs: Songs): PartialSongs => {
        const songIds: SongId[] = Object.keys(songs) as SongId[]
        const filteredSongIds: SongId[] = songIds
            .sort()
            .filter((songId: SongId): boolean =>
                filteredSongsRegistry.every((filteredSongId: SongId): boolean => songId !== filteredSongId),
            )

        return filteredSongIds
            .reduce(
                (filteredSongs: PartialSongs, songId: SongId): PartialSongs =>
                    ({ ...filteredSongs, [ songId ]: songs[ songId ] }),
                // tslint:disable-next-line:no-object-literal-type-assertion
                {} as PartialSongs,
            )
    }

export {
    songsFilter,
}
