
import { ActionType } from '../state/actions'
import { StringifiedSongSpecInputStates, UI } from '../state/state'
import { HandleSongSpecBlurParameters } from './types'

const handleSongSpecBlur: (handleSongSpecBlurParameters: HandleSongSpecBlurParameters) => void =
    (handleSongSpecBlurParameters: HandleSongSpecBlurParameters): void => {
        const { songSpecKey, songSpecValue, dispatch, ui }: HandleSongSpecBlurParameters = handleSongSpecBlurParameters
        const { submittedSongSpec, unsubmittedSongSpecInputs }: UI = ui
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
