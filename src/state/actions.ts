import { Song } from '../songTypes'
import { StringifiedConfig, StringifiedConfigStates } from './state'

enum ActionType {
    SET_SUBMITTED_CONFIG = 'set submitted config',
    SET_SONG = 'set song',
    SET_DISPLAYED_CONFIG = 'set displayed config',
    SET_INVALID_INPUTS = 'set invalid inputs',
    SET_UNSUBMITTED_INPUTS = 'set unsubmitted inputs',
}

interface ActionObject {
    type: ActionType,
}

interface SetSong extends ActionObject {
    data: Song,
    type: ActionType.SET_SONG,
}

interface SetSubmittedConfig extends ActionObject {
    data: StringifiedConfig,
    type: ActionType.SET_SUBMITTED_CONFIG,
}

interface SetDisplayedConfig extends ActionObject {
    data: StringifiedConfig,
    type: ActionType.SET_DISPLAYED_CONFIG,
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
    SetSong |
    SetSubmittedConfig |
    SetDisplayedConfig |
    SetInvalidInputs |
    SetUnsubmittedInputs

export {
    Action,
    ActionType,
    SetSong,
}
