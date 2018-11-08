import { PatternIdStateActionType } from './patternId'
import { PatternSpecStateActionType } from './patternSpec'
import { PerformanceStateActionType } from './performance'

// tslint:disable-next-line:variable-name typedef
const ActionType = { ...PatternIdStateActionType, ...PatternSpecStateActionType, ...PerformanceStateActionType }

export {
    ActionType,
}
