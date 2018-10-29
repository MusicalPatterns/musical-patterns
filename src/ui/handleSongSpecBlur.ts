import { ActionType, StringifiedSongSpecInputStates, Ui } from '../state'
import { HandleSongSpecBlurParameters } from './types'

const handleSongSpecBlur: (handleSongSpecBlurParameters: HandleSongSpecBlurParameters) => void =
    (handleSongSpecBlurParameters: HandleSongSpecBlurParameters): void => {
        const { songSpecKey, songSpecValue, dispatch, ui }: HandleSongSpecBlurParameters = handleSongSpecBlurParameters
        const { submittedSongSpec, unsubmittedSongSpecInputs }: Ui = ui.toJS()
        const currentSongSpecValue: string = submittedSongSpec[ songSpecKey ]

        const updatedUnsubmittedInputs: StringifiedSongSpecInputStates = {
            ...unsubmittedSongSpecInputs,
            [ songSpecKey ]: currentSongSpecValue !== songSpecValue,
        }

        dispatch({ type: ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS, data: updatedUnsubmittedInputs })
    }

export {
    handleSongSpecBlur,
}
