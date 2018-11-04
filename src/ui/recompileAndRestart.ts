import { PatternMaterial, patterns } from '../../patterns'
import { compilePattern } from '../compile'
import { patternLoop } from '../perform'
import { ActionType } from '../state'
import { Thread } from '../types'
import { RecompileAndRestart, RecompileAndRestartParameters } from './types'

const recompileAndRestart: RecompileAndRestart =
    async ({ dispatch, patternId, patternSpec }: RecompileAndRestartParameters): Promise<void> => {
        const patternMaterial: PatternMaterial = patterns[patternId].material
        const threads: Thread[] = await compilePattern({ patternSpec, patternMaterial })
        dispatch({ type: ActionType.SET_THREADS, data: threads })
        dispatch({ type: ActionType.SET_PATTERN_ID, data: patternId })
        patternLoop(threads)
    }

export {
    recompileAndRestart,
}
