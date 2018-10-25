import { immutablize, TypedMap } from './immutablize'

type StringifiedSongSpecEntry = [ string, string ]
interface StringifiedSongSpec {
    [ index: string ]: string,
}
interface StringifiedSongSpecInputStates {
    [ index: string ]: boolean,
}

interface UI {
    displayedSongSpec: StringifiedSongSpec,
    invalidSongSpecInputs: StringifiedSongSpecInputStates,
    submittedSongSpec: StringifiedSongSpec,
    unsubmittedSongSpecInputs: StringifiedSongSpecInputStates,
}

type ImmutableUI = TypedMap<UI>
const initialUi: ImmutableUI = immutablize({
    displayedSongSpec: {},
    invalidSongSpecInputs: {},
    submittedSongSpec: {},
    unsubmittedSongSpecInputs: {},
})

export {
    StringifiedSongSpec,
    StringifiedSongSpecInputStates,
    StringifiedSongSpecEntry,
    initialUi,
    ImmutableUI,
    UI,
}
