import { Song } from '../songTypes'
import { Entities } from '../types'
import { InterfaceConfig, InterfaceConfigStates } from './state'

enum ActionType {
    SET_ACTUAL_CURRENT_CONFIG = 'set actual current config',
    SET_SONG_AND_INTERFACE_CONFIG_FROM_SONG = 'set song and interface config from song',
    SET_INTERFACE_CONFIG = 'set interface config',
    SET_ENTITIES = 'set entities',
    SET_INVALID_INPUTS = 'set invalid inputs',
    SET_UNSUBMITTED_INPUTS = 'set unsubmitted inputs',
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

interface SetInvalidInputs extends ActionObject {
    data: InterfaceConfigStates,
    type: ActionType.SET_INVALID_INPUTS,
}

interface SetUnsubmittedInputs extends ActionObject {
    data: InterfaceConfigStates,
    type: ActionType.SET_UNSUBMITTED_INPUTS,
}

type Action =
    SetActualCurrentConfig |
    SetSongAndInterfaceConfigFromSong |
    SetInterfaceConfig |
    SetEntities |
    SetInvalidInputs |
    SetUnsubmittedInputs

export {
    Action,
    ActionType,
    SetEntities,
}
