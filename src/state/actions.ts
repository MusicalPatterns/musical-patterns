import { PatternIdStateActionType } from './patternId'
import { PatternSpecStateActionType } from './patternSpec'

// tslint:disable-next-line:variable-name typedef
const ActionType = { ...PatternIdStateActionType, ...PatternSpecStateActionType }

export {
    ActionType,
}
