import { TypedMap } from '../types'

interface StringifiedSongSpec {
    [ index: string ]: string,
}
interface StringifiedSongSpecInputStates {
    [ index: string ]: boolean,
}

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
