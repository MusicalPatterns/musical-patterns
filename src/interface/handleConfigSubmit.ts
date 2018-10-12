import { Song } from '../songTypes'
import { deepEqual } from '../utilities/deepEqual'
import { ActionType } from './actions'
import { destringifyConfig } from './destringifyConfig'
import { recompileAndRestart } from './recompileAndRestart'
import { InterfaceConfig, InterfaceConfigStates } from './state'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleConfigSubmitParameters } from './types'

const handleConfigSubmit: (handleConfigSubmitParameters: HandleConfigSubmitParameters) => Promise<void> =
    async (handleConfigSubmitParameters: HandleConfigSubmitParameters): Promise<void> => {
        const {
            actualCurrentConfig,
            configKey,
            configValue,
            dispatch,
            entities,
            invalidInputs,
            song,
            unsubmittedInputs,
        } = handleConfigSubmitParameters

        const updatedConfig: InterfaceConfig = { ...actualCurrentConfig, [ configKey ]: configValue }
        if (deepEqual(actualCurrentConfig, updatedConfig)) {
            return
        }

        try {
            const newSong: Song = { ...song, config: destringifyConfig(updatedConfig) }
            stopPreviousSong(entities)
            dispatch({ type: ActionType.SET_ACTUAL_CURRENT_CONFIG, data: updatedConfig })

            const updatedUnsubmittedInputs: InterfaceConfigStates = { ...unsubmittedInputs, [ configKey ]: false }
            dispatch({ type: ActionType.SET_UNSUBMITTED_INPUTS, data: updatedUnsubmittedInputs })

            await recompileAndRestart(newSong, dispatch)
        }
        catch (e) {
            const updatedInvalidInputs: InterfaceConfigStates = { ...invalidInputs, [ configKey ]: true }
            dispatch({ type: ActionType.SET_INVALID_INPUTS, data: updatedInvalidInputs })
        }
    }

export {
    handleConfigSubmit,
}
