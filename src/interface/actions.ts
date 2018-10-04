import { SongName } from '../songTypes'
import { Times } from '../types'

enum ActionType {
    CHOOSE_SONG = 'choose song',
    UPDATE = 'update',
    UPDATE_SONG_CONFIG = 'update song config',
}

interface ActionObject {
    type: ActionType,
}

interface ChooseSongAction extends ActionObject {
    data: SongName,
    type: ActionType.CHOOSE_SONG,
}

interface UpdateAction extends ActionObject {
    data: Times,
    type: ActionType.UPDATE,
}

interface UpdateSongConfigData {
    configKey: string,
    value: number,
}

interface UpdateSongConfigAction extends ActionObject {
    data: UpdateSongConfigData,
    type: ActionType.UPDATE_SONG_CONFIG,
}

type Action =
    ChooseSongAction |
    UpdateAction |
    UpdateSongConfigAction

export {
    Action,
    ActionType,
    UpdateSongConfigData,
}
