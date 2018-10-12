import { Song } from '../songTypes'
import { Entities } from '../types'
import { InterfaceConfig } from './state'

enum ActionType {
    SET_ACTUAL_CURRENT_CONFIG = 'set actual current config',
    SET_SONG_AND_INTERFACE_CONFIG_FROM_SONG = 'set song and interface config from song',
    SET_INTERFACE_CONFIG = 'set interface config',
    SET_ENTITIES = 'set entities',
    MARK_INPUT_INVALID = 'mark input invalid',
    MARK_INPUT_VALID = 'mark input valid',
    MARK_INPUT_UNSUBMITTED = 'mark input unsubmitted',
    MARK_INPUT_SUBMITTED = 'mark input submitted',
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

interface MarkInputInvalid extends ActionObject {
    data: string,
    type: ActionType.MARK_INPUT_INVALID,
}

interface MarkInputValid extends ActionObject {
    data: string,
    type: ActionType.MARK_INPUT_VALID,
}

interface MarkInputUnsubmitted extends ActionObject {
    data: string,
    type: ActionType.MARK_INPUT_UNSUBMITTED,
}

interface MarkInputSubmitted extends ActionObject {
    data: string,
    type: ActionType.MARK_INPUT_SUBMITTED,
}

type Action =
    SetActualCurrentConfig |
    SetSongAndInterfaceConfigFromSong |
    SetInterfaceConfig |
    SetEntities |
    MarkInputInvalid |
    MarkInputValid |
    MarkInputUnsubmitted |
    MarkInputSubmitted

export {
    Action,
    ActionType,
    SetEntities,
}
