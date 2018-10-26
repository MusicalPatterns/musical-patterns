import { SongID } from '../../song'
import { Maybe } from '../../utilities'
import { Action, ActionType } from '../actions'
import { initialSongId } from './state'

const songIdReducer: (songId: Maybe<SongID>, action: Action) => Maybe<SongID> =
    (songId: Maybe<SongID> = initialSongId, action: Action): Maybe<SongID> => {
        switch (action.type) {
            case ActionType.SET_SONG_ID: {
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
