import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ImmutableRootState, PatternSpecStateKeys, RootStateKeys } from '../state'
import { buildRecompileAndRestart } from './buildRecompileAndRestart'
import { doAfterThisRender } from './doAfterThisRender'
import { PatternListenerProps, PatternListenerPropsFromDispatch, PatternListenerPropsFromState } from './types'

const mapStateToProps: (state: ImmutableRootState) => PatternListenerPropsFromState =
    (state: ImmutableRootState): PatternListenerPropsFromState => ({
        submittedPatternSpec: state.get(RootStateKeys.PATTERN_SPEC)
            .get(PatternSpecStateKeys.SUBMITTED_PATTERN_SPEC),
    })

const mapDispatchToProps: (dispatch: Dispatch) => PatternListenerPropsFromDispatch =
    (dispatch: Dispatch): PatternListenerPropsFromDispatch => ({
        recompileAndRestart: buildRecompileAndRestart(dispatch),
    })

const PatternListener: (patternListenerProps: PatternListenerProps) => JSX.Element =
    ({ patternId, submittedPatternSpec, recompileAndRestart }: PatternListenerProps): JSX.Element => {
        doAfterThisRender(async () => {
            await recompileAndRestart(patternId, submittedPatternSpec)
        })

        return <div/>
    }

export default connect(mapStateToProps, mapDispatchToProps)(PatternListener)
