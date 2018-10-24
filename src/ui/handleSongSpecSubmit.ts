import { songs, SongSpec } from '../songs'
import { ActionType } from '../state/actions'
import { StringifiedSongSpec, StringifiedSongSpecInputStates, UI } from '../state/state'
import { deepEqual } from '../utilities/deepEqual'
import { destringifySongSpec } from './destringifySongSpec'
import { recompileAndRestart } from './recompileAndRestart'
import { stopThreads } from './stopThreads'
import { HandleSongSpecSubmitParameters } from './types'

const handleSongSpecSubmit: (handleSongSpecSubmitParameters: HandleSongSpecSubmitParameters) => Promise<void> =
    async (handleSongSpecSubmitParameters: HandleSongSpecSubmitParameters): Promise<void> => {
        const { songSpecKey, songSpecValue, dispatch, songId, threads, ui } = handleSongSpecSubmitParameters
        const { invalidSongSpecInputs, submittedSongSpec, unsubmittedSongSpecInputs }: UI = ui

        const updatedSongSpec: StringifiedSongSpec = { ...submittedSongSpec, [ songSpecKey ]: songSpecValue }
        if (deepEqual(submittedSongSpec, updatedSongSpec)) {
            return
        }

        try {
            const songSpec: SongSpec = {
                ...songs[songId].spec,
                ...destringifySongSpec(updatedSongSpec),
            }
            stopThreads(threads)
            dispatch({ type: ActionType.SET_SUBMITTED_SONG_SPEC, data: updatedSongSpec })

            const updatedUnsubmittedInputs: StringifiedSongSpecInputStates = {
                ...unsubmittedSongSpecInputs,
                [ songSpecKey ]: false,
            }
            dispatch({ type: ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS, data: updatedUnsubmittedInputs })

            await recompileAndRestart({ songSpec, dispatch, songId })
        }
        catch (e) {
            const updatedInvalidInputs: StringifiedSongSpecInputStates = {
                ...invalidSongSpecInputs,
                [ songSpecKey ]: true,
            }
            dispatch({ type: ActionType.SET_INVALID_SONG_SPEC_INPUTS, data: updatedInvalidInputs })
        }
    }

export {
    handleSongSpecSubmit,
}
