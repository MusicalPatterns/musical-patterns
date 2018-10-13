import { ActionType } from './actions'
import { StringifiedConfigStates, UI } from './state'
import { HandleConfigBlurParameters } from './types'

const handleConfigBlur: (handleConfigBlurParameters: HandleConfigBlurParameters) => void =
    (handleConfigBlurParameters: HandleConfigBlurParameters): void => {
        const { configKey, configValue, dispatch, ui }: HandleConfigBlurParameters = handleConfigBlurParameters
        const { submittedConfig, unsubmittedConfigInputs }: UI = ui
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
