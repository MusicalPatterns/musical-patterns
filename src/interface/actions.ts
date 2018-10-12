import { Song } from '../songTypes'
import { Entities } from '../types'
import { InterfaceConfig } from './types'

enum ActionType {
    SET_SONG_AND_INTERFACE_CONFIG_FROM_SONG = 'set song and interface config from song',
    SET_INTERFACE_CONFIG = 'set interface config',
    SET_ENTITIES = 'set entities',
}

interface ActionObject {
    type: ActionType,
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
    SetSongAndInterfaceConfigFromSong |
    SetInterfaceConfig |
    SetEntities

export {
    Action,
    ActionType,
    SetEntities,
}
