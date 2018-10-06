import { Dispatch } from 'redux'
import { Song } from '../songTypes'
import { Entities } from '../types'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'

const handleConfigSubmit: (dispatch: Dispatch, entities: Entities, song: Song) => Promise<void> =
    async (dispatch: Dispatch, entities: Entities, song: Song): Promise<void> => {
        stopPreviousSong(entities)

        await recompileAndRestart(song, dispatch)
    }

export {
    handleConfigSubmit,
}
