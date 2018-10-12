import { ActionType } from './actions'
import { StringifiedConfigStates } from './state'
import { HandleConfigBlurParameters } from './types'

const handleConfigBlur: (handleConfigBlurParameters: HandleConfigBlurParameters) => void =
    (handleConfigBlurParameters: HandleConfigBlurParameters): void => {
        const {
            configKey,
            configValue,
            dispatch,
            submittedConfig,
            unsubmittedConfigInputs,
        } = handleConfigBlurParameters
        const existingValue: string = submittedConfig[ configKey ]

        const updatedUnsubmittedInputs: StringifiedConfigStates = {
            ...unsubmittedConfigInputs,
            [ configKey ]: existingValue !== configValue,
        }

        dispatch({ type: ActionType.SET_UNSUBMITTED_INPUTS, data: updatedUnsubmittedInputs })
    }

export {
    handleConfigBlur,
}
