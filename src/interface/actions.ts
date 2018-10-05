import { Song } from '../songTypes'
import { Entity } from '../types'

enum ActionType {
    SET_CONFIG_AND_NAME_FROM_SONG = 'set config and name from song',
    SET_ENTITIES = 'set entities',
}

interface ActionObject {
    type: ActionType,
}

interface SetConfigAndNameFromSongAction extends ActionObject {
    data: Song,
    type: ActionType.SET_CONFIG_AND_NAME_FROM_SONG,
}

interface SetEntities extends ActionObject {
    data: Entity[],
    type: ActionType.SET_ENTITIES,
}

type Action =
    SetConfigAndNameFromSongAction |
    SetEntities

export {
    Action,
    ActionType,
}
