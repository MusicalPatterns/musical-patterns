import { SongID } from '../../song'

enum SongIdActionType {
    SET_SONG_ID = 'SET_SONhG_ID',
}

interface SetSongId {
    data: SongID,
    type: SongIdActionType.SET_SONG_ID,
}

type SongIdAction =
    SetSongId

export {
    SongIdAction,
    SongIdActionType,
}
