import { Time } from '@musical-patterns/utilities'
import { StateIndexSignature, TypedMap } from '../types'

enum PerformerStateActionType {
    SET_TIME = 'SET_TIME',
    TOGGLE_PAUSED = 'TOGGLE_PAUSED',
}

interface SetPaused {
    type: PerformerStateActionType.TOGGLE_PAUSED,
}

interface SetTime {
    data: Time,
    type: PerformerStateActionType.SET_TIME,
}

type PerformerStateAction =
    SetPaused |
    SetTime

enum PerformerStateKeys {
    TIME = 'time',
    PAUSED = 'paused',
}

interface PerformerState extends StateIndexSignature {
    [ PerformerStateKeys.TIME ]: Time,
    [ PerformerStateKeys.PAUSED ]: boolean,
}

type ImmutablePerformerState = TypedMap<PerformerState>

export {
    ImmutablePerformerState,
    PerformerStateAction,
    PerformerStateActionType,
    PerformerStateKeys,
}
