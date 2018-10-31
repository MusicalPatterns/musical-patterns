import { PatternMaterial, patterns } from '../../songs'
import { compilePattern } from '../compile'
import { patternLoop } from '../perform'
import { ActionType } from '../state'
import { Thread } from '../types'
import { RecompileAndRestartParameters } from './types'

const recompileAndRestart: (recompileAndRestartParameters: RecompileAndRestartParameters) => Promise<void> =
    async ({ dispatch, patternId, patternSpec }: RecompileAndRestartParameters): Promise<void> => {
        const patternMaterial: PatternMaterial = patterns[patternId].material
        const threads: Thread[] = await compilePattern({ patternSpec, patternMaterial })
        dispatch({ type: ActionType.SET_THREADS, data: threads })
        dispatch({ type: ActionType.SET_SONG_ID, data: patternId })
        patternLoop(threads)
    }

export {
    recompileAndRestart,
}
