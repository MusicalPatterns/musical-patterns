import { Time } from '../../nominal'
import { Thread } from '../../types'
import { Maybe } from '../../utilities'
import { TypedMap } from '../types'

enum PerformanceStateKeys {
    THREADS = 'threads',
    CLOCK = 'clock',
    PAUSED = 'paused',
    ATOMIC_TIME = 'atomicTime',
    RAW_TIME = 'rawTime',
}

enum PerformanceStateActionType {
    SET_THREADS = 'set threads',
    TOGGLE_PAUSED = 'toggle paused',
    SET_CLOCK = 'set clock',
    SET_ATOMIC_TIME = 'set atomic time',
    SET_RAW_TIME = 'set raw time',
    SET_PAUSED = 'set paused',
    INCREMENT_TIME = 'increment time',
}

interface PerformanceState {
    [ PerformanceStateKeys.THREADS ]: Thread[],
    [ PerformanceStateKeys.CLOCK ]: Maybe<Worker>,
    [ PerformanceStateKeys.PAUSED ]: boolean,
    [ PerformanceStateKeys.ATOMIC_TIME ]: Time,
    [ PerformanceStateKeys.RAW_TIME ]: Time,
}

type ImmutablePerformanceState = TypedMap<PerformanceState>

interface SetThreads {
    data: Thread[],
    type: PerformanceStateActionType.SET_THREADS,
}

interface TogglePaused {
    type: PerformanceStateActionType.TOGGLE_PAUSED,
}

interface SetClock {
    data: Worker,
    type: PerformanceStateActionType.SET_CLOCK,
}

interface SetAtomicTime {
    data: Time,
    type: PerformanceStateActionType.SET_ATOMIC_TIME,
}

interface SetRawTime {
    data: Time,
    type: PerformanceStateActionType.SET_RAW_TIME,
}

interface SetPaused {
    data: boolean,
    type: PerformanceStateActionType.SET_PAUSED,
}

interface IncrementTime {
    data: Time,
    type: PerformanceStateActionType.INCREMENT_TIME,
}

type PerformanceStateAction =
    SetThreads |
    TogglePaused |
    SetClock |
    SetAtomicTime |
    SetRawTime |
    SetPaused |
    IncrementTime

export {
    PerformanceStateAction,
    PerformanceStateActionType,
    ImmutablePerformanceState,
    PerformanceStateKeys,
    PerformanceState,
}
