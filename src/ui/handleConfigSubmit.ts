import { songSpecs } from '../songs'
import { SongSpec } from '../songTypes'
import { ActionType } from '../state/actions'
import { StringifiedConfig, StringifiedConfigStates, UI } from '../state/state'
import { deepEqual } from '../utilities/deepEqual'
import { destringifyConfig } from './destringifyConfig'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleConfigSubmitParameters } from './types'

const handleConfigSubmit: (handleConfigSubmitParameters: HandleConfigSubmitParameters) => Promise<void> =
    async (handleConfigSubmitParameters: HandleConfigSubmitParameters): Promise<void> => {
        const { configKey, configValue, dispatch, song, ui } = handleConfigSubmitParameters
        const { invalidConfigInputs, submittedConfig, unsubmittedConfigInputs }: UI = ui

        const updatedConfig: StringifiedConfig = { ...submittedConfig, [ configKey ]: configValue }
        if (deepEqual(submittedConfig, updatedConfig)) {
            return
        }

        try {
            const newSongSpec: SongSpec = { ...songSpecs[song.songId], config: destringifyConfig(updatedConfig) }
            stopPreviousSong(song)
            dispatch({ type: ActionType.SET_SUBMITTED_CONFIG, data: updatedConfig })

            const updatedUnsubmittedInputs: StringifiedConfigStates = {
                ...unsubmittedConfigInputs,
                [ configKey ]: false,
            }
            dispatch({ type: ActionType.SET_UNSUBMITTED_INPUTS, data: updatedUnsubmittedInputs })

            await recompileAndRestart(newSongSpec, dispatch)
        }
        catch (e) {
            const updatedInvalidInputs: StringifiedConfigStates = { ...invalidConfigInputs, [ configKey ]: true }
            dispatch({ type: ActionType.SET_INVALID_INPUTS, data: updatedInvalidInputs })
        }
    }

export {
    handleConfigSubmit,
}
