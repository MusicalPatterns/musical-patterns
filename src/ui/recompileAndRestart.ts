import { Dispatch } from 'redux'
import { songLoop } from '../perform/songLoop'
import { Song, SongSpec } from '../songTypes'
import { ActionType } from '../state/actions'

const recompileAndRestart: (newlySelectedSongSpec: SongSpec, dispatch: Dispatch) => Promise<void> =
    async (newlySelectedSongSpec: SongSpec, dispatch: Dispatch): Promise<void> => {
        const song: Song = await newlySelectedSongSpec.compile(newlySelectedSongSpec)
        dispatch({ type: ActionType.SET_SONG, data: song })
        songLoop(song)
    }

export {
    recompileAndRestart,
}
