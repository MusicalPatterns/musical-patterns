import { Song } from '../songTypes'
import { Entities } from '../types'
import { StringifiedConfig, StringifiedConfigStates } from './state'

enum ActionType {
    SET_SUBMITTED_CONFIG = 'set submitted config',
    SET_SONG_AND_STRINGIFIED_CONFIGS_FROM_SONG = 'set song and stringified config from song',
    SET_STRINGIFIED_CONFIG = 'set stringified config',
    SET_ENTITIES = 'set entities',
    SET_INVALID_INPUTS = 'set invalid inputs',
    SET_UNSUBMITTED_INPUTS = 'set unsubmitted inputs',
}

interface ActionObject {
    type: ActionType,
}

interface SetSubmittedConfig extends ActionObject {
    data: StringifiedConfig,
    type: ActionType.SET_SUBMITTED_CONFIG,
}

interface SetSongAndStringifiedConfigFromSong extends ActionObject {
    data: Song,
    type: ActionType.SET_SONG_AND_STRINGIFIED_CONFIGS_FROM_SONG,
}

interface SetStringifiedConfig extends ActionObject {
    data: StringifiedConfig,
    type: ActionType.SET_STRINGIFIED_CONFIG,
}

interface SetEntities extends ActionObject {
    data: Entities,
    type: ActionType.SET_ENTITIES,
}

interface SetInvalidInputs extends ActionObject {
    data: StringifiedConfigStates,
    type: ActionType.SET_INVALID_INPUTS,
}

interface SetUnsubmittedInputs extends ActionObject {
    data: StringifiedConfigStates,
    type: ActionType.SET_UNSUBMITTED_INPUTS,
}

type Action =
    SetSubmittedConfig |
    SetSongAndStringifiedConfigFromSong |
    SetStringifiedConfig |
    SetEntities |
    SetInvalidInputs |
    SetUnsubmittedInputs

export {
    Action,
    ActionType,
    SetEntities,
}
