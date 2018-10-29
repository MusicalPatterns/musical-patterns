import { immutablize } from '../immutablize'
import { ImmutableUi } from './types'

const initialUi: ImmutableUi = immutablize({
    displayedSongSpec: {},
    invalidSongSpecInputs: {},
    submittedSongSpec: {},
    unsubmittedSongSpecInputs: {},
})

export {
    initialUi,
}
