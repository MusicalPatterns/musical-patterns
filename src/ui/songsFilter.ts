import { SongID } from '../songIds'

interface PartialSongIdObject<T> {
    [ index: string ]: T
}

type FullSongIdObject<T> = { [P in SongID]: T }

type SongIdObjectFilter = <T>(fullSongIdObject: FullSongIdObject<T>) => PartialSongIdObject<T>

const songsFilter: SongIdObjectFilter =
    <T>(fullSongIdObject: FullSongIdObject<T>): PartialSongIdObject<T> => {
        const fullSongIdObjectKeys: SongID[] = Object.keys(fullSongIdObject) as SongID[]
        const partialSongIdObjectKeys: SongID[] = fullSongIdObjectKeys
            .filter((songIdKey: SongID): boolean =>
                songIdKey !== SongID.HAFUHAFU_WITH_PITCH_CIRCULARITY && songIdKey !== SongID._EMPTY_SONG)

        const partialSongIdObjectBase: PartialSongIdObject<T> = {}

        return partialSongIdObjectKeys
            .reduce(
                (partialSongIdObject: PartialSongIdObject<T>, songIdKey: SongID): PartialSongIdObject<T> =>
                    ({ ...partialSongIdObject, [ songIdKey ]: fullSongIdObject[ songIdKey ] }),
                partialSongIdObjectBase,
            )
    }

export {
    songsFilter,
}
