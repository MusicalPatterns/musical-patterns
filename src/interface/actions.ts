import { Song } from '../songTypes'
import { Entities } from '../types'
import { InterfaceConfig } from './types'

enum ActionType {
    SET_ACTUAL_CURRENT_CONFIG = 'set actual current config',
    SET_SONG_AND_INTERFACE_CONFIG_FROM_SONG = 'set song and interface config from song',
    SET_INTERFACE_CONFIG = 'set interface config',
    SET_ENTITIES = 'set entities',
}

interface ActionObject {
    type: ActionType,
}

interface SetActualCurrentConfig extends ActionObject {
    data: InterfaceConfig,
    type: ActionType.SET_ACTUAL_CURRENT_CONFIG,
}

interface SetSongAndInterfaceConfigFromSong extends ActionObject {
    data: Song,
    type: ActionType.SET_SONG_AND_INTERFACE_CONFIG_FROM_SONG,
}

interface SetInterfaceConfig extends ActionObject {
    data: InterfaceConfig,
    type: ActionType.SET_INTERFACE_CONFIG,
}

interface SetEntities extends ActionObject {
    data: Entities,
    type: ActionType.SET_ENTITIES,
}

type Action =
    SetActualCurrentConfig |
    SetSongAndInterfaceConfigFromSong |
    SetInterfaceConfig |
    SetEntities

export {
    Action,
    ActionType,
    SetEntities,
}
