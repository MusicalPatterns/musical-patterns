import { Song } from '../songTypes'
import { ActionType } from './actions'
import { destringifyConfig } from './destringifyConfig'
import { recompileAndRestart } from './recompileAndRestart'
import { InterfaceConfig } from './state'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleConfigSubmitParameters } from './types'

const handleConfigSubmit: (handleConfigSubmitParameters: HandleConfigSubmitParameters) => Promise<void> =
    async (handleConfigSubmitParameters: HandleConfigSubmitParameters): Promise<void> => {
        const { configKey, configValue, dispatch, entities, actualCurrentConfig, song } = handleConfigSubmitParameters
        stopPreviousSong(entities)

        const updatedConfig: InterfaceConfig = { ...actualCurrentConfig, [configKey]: configValue }
        try {
            const newSong: Song = { ...song, config: destringifyConfig(updatedConfig) }
            dispatch({ type: ActionType.SET_ACTUAL_CURRENT_CONFIG, data: updatedConfig })
            await recompileAndRestart(newSong, dispatch)
        }
        catch (e) {
            dispatch({ type: ActionType.MARK_INPUT_INVALID, data: configKey })
        }
    }

export {
    handleConfigSubmit,
}
