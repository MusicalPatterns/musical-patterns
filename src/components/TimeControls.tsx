import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionType, ImmutableRootState, PerformanceStateKeys, RootStateKeys } from '../state'
import { TimeControlsProps, TimeControlsPropsFromDispatch, TimeControlsPropsFromState } from './types'

const mapStateToProps: (state: ImmutableRootState) => TimeControlsPropsFromState =
    (state: ImmutableRootState): TimeControlsPropsFromState => ({
        atomicTime: state.get(RootStateKeys.PERFORMANCE)
            .get(PerformanceStateKeys.ATOMIC_TIME),
        paused: state.get(RootStateKeys.PERFORMANCE)
            .get(PerformanceStateKeys.PAUSED),
    })

const mapDispatchToProps: (dispatch: Dispatch) => TimeControlsPropsFromDispatch =
    (dispatch: Dispatch): TimeControlsPropsFromDispatch => ({
        togglePaused: (): void => {
            dispatch({ type: ActionType.TOGGLE_PAUSED })
        },
    })

const TimeControls: (timeControlsProps: TimeControlsProps) => JSX.Element =
    ({ atomicTime, togglePaused, paused }: TimeControlsProps): JSX.Element => {
        const control: string = paused ? 'play' : 'pause'

        return (
            <div>
                <div {...{ id: control, onClick: togglePaused }}>{control}</div>
                <div {...{ id: 'secret-timer' }}>{atomicTime}</div>
            </div>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(TimeControls)
