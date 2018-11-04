import { immutablize } from '../immutablize'
import { ImmutableUi } from './types'

const initialUi: ImmutableUi = immutablize({
    disabledPatternSpecButtons: {},
    displayedPatternSpec: {},
    invalidPatternSpecInputs: {},
    submittedPatternSpec: {},
    unsubmittedPatternSpecInputs: {},
})

export {
    initialUi,
}
