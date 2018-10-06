import { Song } from '../songTypes'
import { Entities } from '../types'

enum ActionType {
    SET_SONG = 'set song',
    SET_ENTITIES = 'set entities',
}

interface ActionObject {
    type: ActionType,
}

interface SetSong extends ActionObject {
    data: Song,
    type: ActionType.SET_SONG,
}

interface SetEntities extends ActionObject {
    data: Entities,
    type: ActionType.SET_ENTITIES,
}

type Action =
    SetSong |
    SetEntities

export {
    Action,
    ActionType,
    SetEntities,
}
