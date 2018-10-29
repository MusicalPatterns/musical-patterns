import { ActionType, StringifiedSongSpec, StringifiedSongSpecInputStates, Ui } from '../state'
import { HandleSongSpecChangeParameters } from './types'

const handleSongSpecChange: (handleSongSpecChangeParameters: HandleSongSpecChangeParameters) => void =
    (parameters: HandleSongSpecChangeParameters): void => {
        const { dispatch, songSpecKey, songSpecValue, ui }: HandleSongSpecChangeParameters = parameters
        const { displayedSongSpec, invalidSongSpecInputs }: Ui = ui.toJS()

        const updatedStringifiedSongSpec: StringifiedSongSpec = {
            ...displayedSongSpec,
            [ songSpecKey ]: songSpecValue,
        }
        dispatch({ type: ActionType.SET_DISPLAYED_SONG_SPEC, data: updatedStringifiedSongSpec })

        const updatedInvalidInputs: StringifiedSongSpecInputStates = {
            ...invalidSongSpecInputs,
            [ songSpecKey ]: false,
        }
        dispatch({ type: ActionType.SET_INVALID_SONG_SPEC_INPUTS, data: updatedInvalidInputs })
    }

export {
    handleSongSpecChange,
}
