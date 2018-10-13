import { songs } from '../song'
import { Song } from '../songTypes'
import { ActionType } from '../state/actions'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleSongChangeParameters } from './types'

const handleSongChange: (handleSongChangeParameters: HandleSongChangeParameters) => Promise<void> =
    async ({ dispatch, songId, entities }: HandleSongChangeParameters): Promise<void> => {
        const song: Song = songs[songId]

        stopPreviousSong(entities)

        dispatch({ type: ActionType.SET_SONG_AND_STRINGIFIED_CONFIGS_FROM_SONG, data: song })

        await recompileAndRestart(song, dispatch)
    }

export {
    handleSongChange,
}
