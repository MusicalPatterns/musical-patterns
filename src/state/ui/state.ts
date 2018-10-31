import { immutablize } from '../immutablize'
import { ImmutableUi } from './types'

const initialUi: ImmutableUi = immutablize({
    displayedPatternSpec: {},
    invalidPatternSpecInputs: {},
    submittedPatternSpec: {},
    unsubmittedPatternSpecInputs: {},
})

export {
    initialUi,
}
