import { SongIdActionType } from './songId'
import { ThreadsActionType } from './threads'
import { UiActionType } from './ui'

// tslint:disable-next-line:variable-name typedef
const ActionType = { ...SongIdActionType, ...ThreadsActionType, ...UiActionType }

export {
    ActionType,
}
