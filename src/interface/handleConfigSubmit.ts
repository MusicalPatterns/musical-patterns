import { Song } from '../songTypes'
import { deepEqual } from '../utilities/deepEqual'
import { ActionType } from './actions'
import { destringifyConfig } from './destringifyConfig'
import { recompileAndRestart } from './recompileAndRestart'
import { InterfaceConfig } from './state'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleConfigSubmitParameters } from './types'

const handleConfigSubmit: (handleConfigSubmitParameters: HandleConfigSubmitParameters) => Promise<void> =
    async (handleConfigSubmitParameters: HandleConfigSubmitParameters): Promise<void> => {
        const { configKey, configValue, dispatch, entities, actualCurrentConfig, song } = handleConfigSubmitParameters

        const updatedConfig: InterfaceConfig = { ...actualCurrentConfig, [configKey]: configValue }
        if (deepEqual(actualCurrentConfig, updatedConfig)) {
            return
        }

        try {
            const newSong: Song = { ...song, config: destringifyConfig(updatedConfig) }
            stopPreviousSong(entities)
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
