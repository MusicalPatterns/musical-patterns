import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionType, ImmutableRootState, PerformanceStateKeys, RootStateKeys } from '../state'
import { buildClock } from './buildClock'
import { doAfterThisRender } from './doAfterThisRender'
import {
    ThreadsChangeListenerProps,
    ThreadsChangeListenerPropsFromDispatch,
    ThreadsChangeListenerPropsFromState,
} from './types'

const mapStateToProps: (state: ImmutableRootState) => ThreadsChangeListenerPropsFromState =
    (state: ImmutableRootState): ThreadsChangeListenerPropsFromState => ({
        threads: state.get(RootStateKeys.PERFORMANCE)
            .get(PerformanceStateKeys.THREADS),
    })

const mapDispatchToProps: (dispatch: Dispatch) => ThreadsChangeListenerPropsFromDispatch =
    (dispatch: Dispatch): ThreadsChangeListenerPropsFromDispatch => ({
        resetClock: (): void => {
            dispatch({ type: ActionType.SET_CLOCK, data: buildClock(dispatch) })
        },
    })

const ThreadsChangeListener: (threadsChangeListenerProps: ThreadsChangeListenerProps) => JSX.Element =
    ({ threads, resetClock }: ThreadsChangeListenerProps): JSX.Element => {
        doAfterThisRender(resetClock)

        return <div/>
    }

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsChangeListener)
