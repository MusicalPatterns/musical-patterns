import { ActionType } from './actions'
import { StringifiedConfig, StringifiedConfigStates } from './state'
import { HandleConfigChangeParameters } from './types'

const handleConfigChange: (handleConfigChangeParameters: HandleConfigChangeParameters) => void =
    (handleConfigChangeParameters: HandleConfigChangeParameters): void => {
        const { dispatch, configKey, configValue, displayedConfig, invalidConfigInputs } = handleConfigChangeParameters

        const updatedStringifiedConfig: StringifiedConfig = { ...displayedConfig, ...{ [ configKey ]: configValue } }
        dispatch({ type: ActionType.SET_STRINGIFIED_CONFIG, data: updatedStringifiedConfig })

        const updatedInvalidInputs: StringifiedConfigStates = { ...invalidConfigInputs, [ configKey ]: false }
        dispatch({ type: ActionType.SET_INVALID_INPUTS, data: updatedInvalidInputs })
    }

export {
    handleConfigChange,
}
