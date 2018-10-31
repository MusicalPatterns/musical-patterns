import { PatternIdActionType } from './patternId'
import { ThreadsActionType } from './threads'
import { UiActionType } from './ui'

// tslint:disable-next-line:variable-name typedef
const ActionType = { ...PatternIdActionType, ...ThreadsActionType, ...UiActionType }

export {
    ActionType,
}
