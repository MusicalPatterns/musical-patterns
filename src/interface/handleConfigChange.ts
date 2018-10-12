import { ActionType } from './actions'
import { InterfaceConfig, InterfaceConfigStates } from './state'
import { HandleConfigChangeParameters } from './types'

const handleConfigChange: (handleConfigChangeParameters: HandleConfigChangeParameters) => void =
    ({ dispatch, configKey, configValue, interfaceConfig, invalidInputs }: HandleConfigChangeParameters): void => {
        const updatedInterfaceConfig: InterfaceConfig = { ...interfaceConfig, ...{ [ configKey ]: configValue } }
        dispatch({ type: ActionType.SET_INTERFACE_CONFIG, data: updatedInterfaceConfig })

        const updatedInvalidInputs: InterfaceConfigStates = { ...invalidInputs, [ configKey ]: false }
        dispatch({ type: ActionType.SET_INVALID_INPUTS, data: updatedInvalidInputs })
    }

export {
    handleConfigChange,
}
