import { SongID } from '../songIds'
import { Maybe } from '../utilities/types'
import { Action, ActionType } from './actions'
import { initialSongId } from './songIdState'

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
