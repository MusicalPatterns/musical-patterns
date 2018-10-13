
import { ActionType } from '../state/actions'
import { StringifiedConfigStates, UI } from '../state/state'
import { HandleConfigBlurParameters } from './types'

const handleConfigBlur: (handleConfigBlurParameters: HandleConfigBlurParameters) => void =
    (handleConfigBlurParameters: HandleConfigBlurParameters): void => {
        const { configKey, configValue, dispatch, ui }: HandleConfigBlurParameters = handleConfigBlurParameters
        const { submittedConfig, unsubmittedConfigInputs }: UI = ui
        const currentConfigValue: string = submittedConfig[ configKey ]

        const updatedUnsubmittedInputs: StringifiedConfigStates = {
            ...unsubmittedConfigInputs,
            [ configKey ]: currentConfigValue !== configValue,
        }

        dispatch({ type: ActionType.SET_UNSUBMITTED_INPUTS, data: updatedUnsubmittedInputs })
    }

export {
    handleConfigBlur,
}
