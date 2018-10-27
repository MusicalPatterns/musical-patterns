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

export {
    StringifiedSongSpecInputStates,
    StringifiedSongSpec,
    StringifiedSongSpecEntry,
    UI,
    ImmutableUI,
    UIStateKeys,
}
