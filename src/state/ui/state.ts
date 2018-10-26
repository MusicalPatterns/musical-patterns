import { immutablize } from '../immutablize'
import { ImmutableUI } from './types'

const initialUi: ImmutableUI = immutablize({
    displayedSongSpec: {},
    invalidSongSpecInputs: {},
    submittedSongSpec: {},
    unsubmittedSongSpecInputs: {},
})

export {
    initialUi,
}
