import { Dispatch } from 'redux'
import { Song } from '../songTypes'
import { Entities } from '../types'
import { ActionType } from './actions'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'

const handleSongChange: (dispatch: Dispatch, song: Song, entities: Entities) => Promise<void> =
    async (dispatch: Dispatch, song: Song, entities: Entities): Promise<void> => {
        stopPreviousSong(entities)

        dispatch({type: ActionType.SET_CONFIG_AND_NAME_FROM_SONG, data: song})

        await recompileAndRestart(song, dispatch)
    }

export {
    handleSongChange,
}
