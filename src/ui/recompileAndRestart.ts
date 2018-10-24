import { Dispatch } from 'redux'
import { compileSong } from '../compile/compileSong'
import { songLoop } from '../perform/songLoop'
import { SongID } from '../songIds'
import { songs, SongSpec } from '../songs'
import { SongMaterial } from '../songTypes'
import { ActionType } from '../state/actions'
import { Threads } from '../types'

interface RecompileAndRestartParameters {
    dispatch: Dispatch,
    songId: SongID,
    songSpec: SongSpec,
}

const recompileAndRestart: (recompileAndRestartParameters: RecompileAndRestartParameters) => Promise<void> =
    async ({ dispatch, songId, songSpec }: RecompileAndRestartParameters): Promise<void> => {
        const songMaterial: SongMaterial = songs[songId].material
        const threads: Threads = await compileSong({ songSpec, songMaterial })
        dispatch({ type: ActionType.SET_THREADS, data: threads })
        dispatch({ type: ActionType.SET_SONG_ID, data: songId })
        songLoop(threads)
    }

export {
    recompileAndRestart,
}
