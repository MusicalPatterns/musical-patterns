import { ActionType } from './actions'
import { InterfaceConfig } from './state'
import { HandleConfigChangeParameters } from './types'

const handleConfigChange: (handleConfigChangeParameters: HandleConfigChangeParameters) => void =
    ({ dispatch, configKey, configValue, interfaceConfig }: HandleConfigChangeParameters): void => {
        const updatedInterfaceConfig: InterfaceConfig = { ...interfaceConfig, ...{ [configKey]: configValue } }

        dispatch({ type: ActionType.SET_INTERFACE_CONFIG, data: updatedInterfaceConfig })
        dispatch({ type: ActionType.MARK_INPUT_VALID, data: configKey })
    }

export {
    handleConfigChange,
}
