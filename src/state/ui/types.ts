import { DictionaryOf } from '../../utilities'
import { TypedMap } from '../types'

type StringifiedSongSpec = DictionaryOf<string>

type StringifiedSongSpecInputStates = DictionaryOf<boolean>

type StringifiedSongSpecEntry = [ string, string ]

enum UIStateKeys {
    DISPLAYED_SONG_SPEC = 'displayedSongSpec',
    INVALID_SONG_SPEC_INPUTS = 'invalidSongSpecInputs',
    SUBMITTED_SONG_SPEC = 'submittedSongSpec',
    UNSUBMITTED_SONG_SPEC_INPUTS = 'unsubmittedSongSpecInputs',
}

interface UI {
    [ UIStateKeys.DISPLAYED_SONG_SPEC ]: StringifiedSongSpec,
    [ UIStateKeys.INVALID_SONG_SPEC_INPUTS ]: StringifiedSongSpecInputStates,
    [ UIStateKeys.SUBMITTED_SONG_SPEC ]: StringifiedSongSpec,
    [ UIStateKeys.UNSUBMITTED_SONG_SPEC_INPUTS ]: StringifiedSongSpecInputStates,
}

type ImmutableUI = TypedMap<UI>

enum UiActionType {
    SET_SUBMITTED_SONG_SPEC = 'set submitted song spec',
    SET_DISPLAYED_SONG_SPEC = 'set displayed song spec',
    SET_INVALID_SONG_SPEC_INPUTS = 'set invalid song spec inputs',
    SET_UNSUBMITTED_SONG_SPEC_INPUTS = 'set unsubmitted song spec inputs',
}

interface SetSubmittedSongSpec {
    data: StringifiedSongSpec,
    type: UiActionType.SET_SUBMITTED_SONG_SPEC,
}

interface SetDisplayedSongSpec {
    data: StringifiedSongSpec,
    type: UiActionType.SET_DISPLAYED_SONG_SPEC,
}

interface SetInvalidSongSpecInputs {
    data: StringifiedSongSpecInputStates,
    type: UiActionType.SET_INVALID_SONG_SPEC_INPUTS,
}

interface SetUnsubmittedSongSpecInputs {
    data: StringifiedSongSpecInputStates,
    type: UiActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS,
}

type UiAction =
    SetSubmittedSongSpec |
    SetDisplayedSongSpec |
    SetInvalidSongSpecInputs |
    SetUnsubmittedSongSpecInputs

export {
    StringifiedSongSpecInputStates,
    StringifiedSongSpec,
    StringifiedSongSpecEntry,
    UI,
    ImmutableUI,
    UIStateKeys,
    UiAction,
    UiActionType,
}
