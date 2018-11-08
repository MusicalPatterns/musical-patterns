import { from, Time, to } from '../../nominal'
import { applyOffset } from '../../utilities'
import { stopThreads, terminateClock, updateThreads } from './sideEffects'
import { initialPerformance } from './state'
import {
    ImmutablePerformanceState,
    PerformanceStateAction,
    PerformanceStateActionType,
    PerformanceStateKeys,
} from './types'

const performanceReducer: (
    performanceState: ImmutablePerformanceState,
    action: PerformanceStateAction,
) => ImmutablePerformanceState =
    // tslint:disable-next-line:cyclomatic-complexity
    (
        performanceState: ImmutablePerformanceState = initialPerformance,
        action: PerformanceStateAction,
    ): ImmutablePerformanceState => {
        switch (action.type) {
            case PerformanceStateActionType.SET_THREADS: {
                stopThreads(performanceState.get(PerformanceStateKeys.THREADS))

                return performanceState.set(PerformanceStateKeys.THREADS, action.data)
            }
            case PerformanceStateActionType.TOGGLE_PAUSED: {
                return performanceState.set(
                    PerformanceStateKeys.PAUSED,
                    !performanceState.get(PerformanceStateKeys.PAUSED),
                )
            }
            case PerformanceStateActionType.SET_CLOCK: {
                terminateClock(performanceState.get(PerformanceStateKeys.CLOCK))

                return performanceState.set(PerformanceStateKeys.CLOCK, action.data)
            }
            case PerformanceStateActionType.SET_ATOMIC_TIME: {
                return performanceState.set(PerformanceStateKeys.ATOMIC_TIME, action.data)
            }
            case PerformanceStateActionType.SET_RAW_TIME: {
                return performanceState.set(PerformanceStateKeys.RAW_TIME, action.data)
            }
            case PerformanceStateActionType.SET_PAUSED: {
                return performanceState.set(PerformanceStateKeys.PAUSED, action.data)
            }
            case PerformanceStateActionType.INCREMENT_TIME: {
                if (performanceState.get(PerformanceStateKeys.PAUSED)) {
                    return performanceState
                }

                const incrementedAtomicTime: Time = applyOffset(
                    performanceState.get(PerformanceStateKeys.ATOMIC_TIME),
                    to.Offset(1),
                )
                const incrementedRawTime: Time = applyOffset(
                    performanceState.get(PerformanceStateKeys.RAW_TIME),
                    to.Offset(from.Time(action.data)),
                )

                updateThreads(
                    performanceState.get(PerformanceStateKeys.THREADS),
                    performanceState.get(PerformanceStateKeys.RAW_TIME),
                    incrementedAtomicTime,
                )

                return performanceState
                    .set(PerformanceStateKeys.ATOMIC_TIME, incrementedAtomicTime)
                    .set(PerformanceStateKeys.RAW_TIME, incrementedRawTime)
            }

            default: {
                return performanceState
            }
        }
    }

export {
    performanceReducer,
}
