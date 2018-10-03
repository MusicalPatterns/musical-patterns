import { Song, Times } from '../types'

enum ActionType {
    CHOOSE_SONG = 'choose song',
    UPDATE = 'update',
}

interface ActionObject {
    type: ActionType,
}

interface ChooseSongAction extends ActionObject {
    data: Song,
    type: ActionType.CHOOSE_SONG,
}

interface UpdateAction extends ActionObject {
    data: Times,
    type: ActionType.UPDATE,
}

type Action =
    ChooseSongAction |
    UpdateAction

export {
    Action,
    ActionType,
}
