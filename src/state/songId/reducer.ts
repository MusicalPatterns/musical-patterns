import { SongId } from '../../../songs'
import { Maybe } from '../../utilities'
import { initialSongId } from './state'
import { SongIdAction, SongIdActionType } from './types'

const songIdReducer: (songId: Maybe<SongId>, action: SongIdAction) => Maybe<SongId> =
    (songId: Maybe<SongId> = initialSongId, action: SongIdAction): Maybe<SongId> => {
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
