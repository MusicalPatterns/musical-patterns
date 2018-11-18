import { PatternIdStateActionType } from './patternId'
import { PatternSpecStateActionType } from './patternSpec'
import { PerformerStateActionType } from './performer'

// tslint:disable-next-line:variable-name typedef
const ActionType = { ...PatternIdStateActionType, ...PatternSpecStateActionType, ...PerformerStateActionType }

export {
    ActionType,
}
