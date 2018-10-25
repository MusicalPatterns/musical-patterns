import { SongID } from '../songIds'
import { ImmutableThreads } from './threadsState'
import { StringifiedSongSpec, StringifiedSongSpecInputStates } from './uiState'

enum ActionType {
    SET_SUBMITTED_SONG_SPEC = 'set submitted song spec',
    SET_THREADS = 'set threads',
    SET_SONG_ID = 'set song id',
    SET_DISPLAYED_SONG_SPEC = 'set displayed song spec',
    SET_INVALID_SONG_SPEC_INPUTS = 'set invalid song spec inputs',
    SET_UNSUBMITTED_SONG_SPEC_INPUTS = 'set unsubmitted song spec inputs',
}

interface ActionObject {
    type: ActionType,
}

interface SetThreads extends ActionObject {
    data: ImmutableThreads,
    type: ActionType.SET_THREADS,
}

interface SetSongId extends ActionObject {
    data: SongID,
    type: ActionType.SET_SONG_ID,
}

interface SetSubmittedSongSpec extends ActionObject {
    data: StringifiedSongSpec,
    type: ActionType.SET_SUBMITTED_SONG_SPEC,
}

interface SetDisplayedSongSpec extends ActionObject {
    data: StringifiedSongSpec,
    type: ActionType.SET_DISPLAYED_SONG_SPEC,
}

interface SetInvalidSongSpecInputs extends ActionObject {
    data: StringifiedSongSpecInputStates,
    type: ActionType.SET_INVALID_SONG_SPEC_INPUTS,
}

interface SetUnsubmittedSongSpecInputs extends ActionObject {
    data: StringifiedSongSpecInputStates,
    type: ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS,
}

type Action =
    SetThreads |
    SetSongId |
    SetSubmittedSongSpec |
    SetDisplayedSongSpec |
    SetInvalidSongSpecInputs |
    SetUnsubmittedSongSpecInputs

export {
    Action,
    ActionType,
    SetThreads,
}
