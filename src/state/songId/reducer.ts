import { SongID } from '../../song'
import { Maybe } from '../../utilities'
import { initialSongId } from './state'
import { SongIdAction, SongIdActionType } from './types'

const songIdReducer: (songId: Maybe<SongID>, action: SongIdAction) => Maybe<SongID> =
    (songId: Maybe<SongID> = initialSongId, action: SongIdAction): Maybe<SongID> => {
        switch (action.type) {
            case SongIdActionType.SET_SONG_ID: {
                return action.data
            }

            default: {
                return songId
            }
        }
    }

export {
    songIdReducer,
}
