import { ActionType } from './actions'
import { HandleConfigBlurParameters } from './types'

const handleConfigBlur: (handleConfigBlurParameters: HandleConfigBlurParameters) => void =
    ({ configKey, configValue, dispatch, actualCurrentConfig }: HandleConfigBlurParameters): void => {
        const existingValue: string = actualCurrentConfig[ configKey ]
        if (existingValue === configValue) {
            dispatch({ type: ActionType.MARK_INPUT_SUBMITTED, data: configKey })
        }
        else {
            dispatch({ type: ActionType.MARK_INPUT_UNSUBMITTED, data: configKey })
        }
    }

export {
    handleConfigBlur,
}
