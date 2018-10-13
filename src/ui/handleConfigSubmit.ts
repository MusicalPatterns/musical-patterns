import { Song } from '../songTypes'
import { deepEqual } from '../utilities/deepEqual'
import { ActionType } from './actions'
import { destringifyConfig } from './destringifyConfig'
import { recompileAndRestart } from './recompileAndRestart'
import { StringifiedConfig, StringifiedConfigStates, UI } from './state'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleConfigSubmitParameters } from './types'

const handleConfigSubmit: (handleConfigSubmitParameters: HandleConfigSubmitParameters) => Promise<void> =
    async (handleConfigSubmitParameters: HandleConfigSubmitParameters): Promise<void> => {
        const { configKey, configValue, dispatch, entities, song, ui } = handleConfigSubmitParameters
        const { invalidConfigInputs, submittedConfig, unsubmittedConfigInputs }: UI = ui

        const updatedConfig: StringifiedConfig = { ...submittedConfig, [ configKey ]: configValue }
        if (deepEqual(submittedConfig, updatedConfig)) {
            return
        }

        try {
            const newSong: Song = { ...song, config: destringifyConfig(updatedConfig) }
            stopPreviousSong(entities)
            dispatch({ type: ActionType.SET_SUBMITTED_CONFIG, data: updatedConfig })

            const updatedUnsubmittedInputs: StringifiedConfigStates = {
                ...unsubmittedConfigInputs,
                [ configKey ]: false,
            }
            dispatch({ type: ActionType.SET_UNSUBMITTED_INPUTS, data: updatedUnsubmittedInputs })

            await recompileAndRestart(newSong, dispatch)
        }
        catch (e) {
            const updatedInvalidInputs: StringifiedConfigStates = { ...invalidConfigInputs, [ configKey ]: true }
            dispatch({ type: ActionType.SET_INVALID_INPUTS, data: updatedInvalidInputs })
        }
    }

export {
    handleConfigSubmit,
}
