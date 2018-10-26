import { DictionaryOf } from '../../utilities'
import { TypedMap } from '../types'

type StringifiedSongSpec = DictionaryOf<string>

type StringifiedSongSpecInputStates = DictionaryOf<boolean>

type StringifiedSongSpecEntry = [ string, string ]

interface UI {
    displayedSongSpec: StringifiedSongSpec,
    invalidSongSpecInputs: StringifiedSongSpecInputStates,
    submittedSongSpec: StringifiedSongSpec,
    unsubmittedSongSpecInputs: StringifiedSongSpecInputStates,
}

type ImmutableUI = TypedMap<UI>

export {
    StringifiedSongSpecInputStates,
    StringifiedSongSpec,
    StringifiedSongSpecEntry,
    UI,
    ImmutableUI,
}
