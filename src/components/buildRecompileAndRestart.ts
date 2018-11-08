import { Dispatch } from 'redux'
import { BatchAction, batchActions } from 'redux-batched-actions'
import { Pattern, PatternId, patterns, PatternSpec } from '../../patterns'
import { compilePattern } from '../compile'
import { to } from '../nominal'
import { destringifyPatternSpec } from '../patternSpec'
import { ActionType, StringifiedPatternSpec } from '../state'
import { Thread } from '../types'
import { RecompileAndRestart } from './types'

const buildRecompileAndRestart: (dispatch: Dispatch) => RecompileAndRestart =
    (dispatch: Dispatch): RecompileAndRestart =>
        async (patternId: PatternId, submittedPatternSpec: StringifiedPatternSpec): Promise<void> => {
            const pattern: Pattern = patterns[ patternId ]
            const spec: PatternSpec = destringifyPatternSpec(submittedPatternSpec)
            const threads: Thread[] = await compilePattern({ ...pattern, spec })

            // tslint:disable-next-line:no-unsafe-any
            const batchedAction: BatchAction = batchActions([
                { type: ActionType.SET_ATOMIC_TIME, data: to.Time(0) },
                { type: ActionType.SET_RAW_TIME, data: to.Time(0) },
                { type: ActionType.SET_THREADS, data: threads },
            ])
            dispatch(batchedAction)
        }

export {
    buildRecompileAndRestart,
}
