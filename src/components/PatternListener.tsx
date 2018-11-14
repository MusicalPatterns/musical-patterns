import { restart, Thread } from '@musical-patterns/performer'
import * as React from 'react'
import { connect } from 'react-redux'
import { Pattern, patterns, PatternSpec } from '../../patterns'
import { compilePattern } from '../compile'
import { destringifyPatternSpec } from '../patternSpec'
import { ImmutableRootState, PatternSpecStateKeys, RootStateKeys } from '../state'
import { doAsync } from '../utilities'
import { PatternListenerProps, PatternListenerPropsFromState } from './types'

const mapStateToProps: (state: ImmutableRootState) => PatternListenerPropsFromState =
    (state: ImmutableRootState): PatternListenerPropsFromState => ({
        submittedPatternSpec: state.get(RootStateKeys.PATTERN_SPEC)
            .get(PatternSpecStateKeys.SUBMITTED_PATTERN_SPEC),
    })

const PatternListener: (patternListenerProps: PatternListenerProps) => JSX.Element =
    ({ patternId, submittedPatternSpec }: PatternListenerProps): JSX.Element => {
        doAsync(async () => {
            const pattern: Pattern = patterns[ patternId ]
            const spec: PatternSpec = destringifyPatternSpec(submittedPatternSpec)
            const threads: Thread[] = await compilePattern({ ...pattern, spec })

            restart(threads)
        })

        return <div/>
    }

// tslint:disable-next-line:no-any
export default connect(mapStateToProps)(PatternListener as any)
