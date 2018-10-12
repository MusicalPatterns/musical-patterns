import { ActionType } from './actions'
import { HandleConfigChangeParameters, InterfaceConfig } from './types'

const handleConfigChange: (handleConfigChangeParameters: HandleConfigChangeParameters) => void =
    ({ dispatch, configKey, configValue, interfaceConfig }: HandleConfigChangeParameters): void => {
        const updatedInterfaceConfig: InterfaceConfig = { ...interfaceConfig, ...{ [configKey]: configValue } }

        dispatch({ type: ActionType.SET_INTERFACE_CONFIG, data: updatedInterfaceConfig })
    }

export {
    handleConfigChange,
}
