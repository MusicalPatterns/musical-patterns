import { ActionType } from './actions'
import { InterfaceConfigStates } from './state'
import { HandleConfigBlurParameters } from './types'

const handleConfigBlur: (handleConfigBlurParameters: HandleConfigBlurParameters) => void =
    (handleConfigBlurParameters: HandleConfigBlurParameters): void => {
        const { configKey, configValue, dispatch, actualCurrentConfig, unsubmittedInputs } = handleConfigBlurParameters
        const existingValue: string = actualCurrentConfig[ configKey ]

        const updatedUnsubmittedInputs: InterfaceConfigStates = {
            ...unsubmittedInputs,
            [ configKey ]: existingValue !== configValue,
        }

        dispatch({ type: ActionType.SET_UNSUBMITTED_INPUTS, data: updatedUnsubmittedInputs })
    }

export {
    handleConfigBlur,
}
