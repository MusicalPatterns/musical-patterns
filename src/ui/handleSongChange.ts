import { songConfigs } from '../songs'
import { SongConfig } from '../songTypes'
import { ActionType } from '../state/actions'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleSongChangeParameters } from './types'
import { stringifyConfig } from './stringifyConfig'
import { StringifiedConfig } from '../state/state'

const handleSongChange: (handleSongChangeParameters: HandleSongChangeParameters) => Promise<void> =
    async ({ dispatch, newlySelectedSongId, currentSong }: HandleSongChangeParameters): Promise<void> => {
        const newlySelectedSongConfig: SongConfig = songConfigs[newlySelectedSongId]

        if (currentSong) {
            stopPreviousSong(currentSong)
        }

        const stringifiedConfig: StringifiedConfig = stringifyConfig(newlySelectedSongConfig.config)

        dispatch({ type: ActionType.SET_SUBMITTED_CONFIG, data: stringifiedConfig })
        dispatch({ type: ActionType.SET_DISPLAYED_CONFIG, data: stringifiedConfig })

        await recompileAndRestart(newlySelectedSongConfig, dispatch)
    }

export {
    handleSongChange,
}
