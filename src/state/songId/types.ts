import { SongId } from '../../../songs'

enum SongIdActionType {
    SET_SONG_ID = 'SET_SONG_ID',
}

interface SetSongId {
    data: SongId,
    type: SongIdActionType.SET_SONG_ID,
}

type SongIdAction =
    SetSongId

export {
    SongIdAction,
    SongIdActionType,
}
