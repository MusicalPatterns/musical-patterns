import { songs, SongSpec } from '../song'
import { ActionType, StringifiedSongSpec } from '../state'
import { recompileAndRestart } from './recompileAndRestart'
import { stopThreads } from './stopThreads'
import { stringifySongSpec } from './stringifySongSpec'
import { HandleSongChangeParameters } from './types'

const handleSongChange: (handleSongChangeParameters: HandleSongChangeParameters) => Promise<void> =
    async ({ dispatch, songId, threads }: HandleSongChangeParameters): Promise<void> => {
        const songSpec: SongSpec = songs[ songId ].spec

        stopThreads(threads)

        const stringifiedSongSpec: StringifiedSongSpec = stringifySongSpec(songSpec)

        dispatch({ type: ActionType.SET_SUBMITTED_SONG_SPEC, data: stringifiedSongSpec })
        dispatch({ type: ActionType.SET_DISPLAYED_SONG_SPEC, data: stringifiedSongSpec })

        await recompileAndRestart({ songSpec, dispatch, songId })
    }

export {
    handleSongChange,
}
