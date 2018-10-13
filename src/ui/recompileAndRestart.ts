import { Dispatch } from 'redux'
import { songLoop } from '../perform/songLoop'
import { Song, SongConfig } from '../songTypes'
import { ActionType } from '../state/actions'

const recompileAndRestart: (newlySelectedSongConfig: SongConfig, dispatch: Dispatch) => Promise<void> =
    async (newlySelectedSongConfig: SongConfig, dispatch: Dispatch): Promise<void> => {
        const song: Song = await newlySelectedSongConfig.compile(newlySelectedSongConfig)
        dispatch({ type: ActionType.SET_SONG, data: song })
        songLoop(song)
    }

export {
    recompileAndRestart,
}
