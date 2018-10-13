import { songSpecs } from '../songs'
import { SongSpec } from '../songTypes'
import { ActionType } from '../state/actions'
import { StringifiedConfig } from '../state/state'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'
import { stringifyConfig } from './stringifyConfig'
import { HandleSongChangeParameters } from './types'

const handleSongChange: (handleSongChangeParameters: HandleSongChangeParameters) => Promise<void> =
    async ({ dispatch, newlySelectedSongId, currentSong }: HandleSongChangeParameters): Promise<void> => {
        const newlySelectedSongSpec: SongSpec = songSpecs[newlySelectedSongId]

        if (currentSong) {
            stopPreviousSong(currentSong)
        }

        const stringifiedConfig: StringifiedConfig = stringifyConfig(newlySelectedSongSpec.config)

        dispatch({ type: ActionType.SET_SUBMITTED_CONFIG, data: stringifiedConfig })
        dispatch({ type: ActionType.SET_DISPLAYED_CONFIG, data: stringifiedConfig })

        await recompileAndRestart(newlySelectedSongSpec, dispatch)
    }

export {
    handleSongChange,
}
