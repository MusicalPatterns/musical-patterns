import { compileSong } from '../compile'
import { songLoop } from '../perform'
import { SongMaterial, songs } from '../song'
import { ActionType } from '../state'
import { Threads } from '../types'
import { RecompileAndRestartParameters } from './types'

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
