import { immutablize } from '../immutablize'
import { ImmutablePatternSpecState } from './types'

const initialPatternSpecState: ImmutablePatternSpecState = immutablize({
    disabledPatternSpecButtons: {},
    displayedPatternSpec: {},
    invalidPatternSpecInputs: {},
    submittedPatternSpec: {},
    unsubmittedPatternSpecInputs: {},
})

export {
    initialPatternSpecState,
}
