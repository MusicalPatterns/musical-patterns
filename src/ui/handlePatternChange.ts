import { patterns, PatternSpec } from '../../songs'
import { ActionType, StringifiedPatternSpec } from '../state'
import { recompileAndRestart } from './recompileAndRestart'
import { stopThreads } from './stopThreads'
import { stringifyPatternSpec } from './stringifyPatternSpec'
import { HandlePatternChangeParameters } from './types'

const handlePatternChange: (handlePatternChangeParameters: HandlePatternChangeParameters) => Promise<void> =
    async ({ dispatch, patternId, threads }: HandlePatternChangeParameters): Promise<void> => {
        const patternSpec: PatternSpec = patterns[ patternId ].spec

        stopThreads(threads)

        const stringifiedPatternSpec: StringifiedPatternSpec = stringifyPatternSpec(patternSpec)

        dispatch({ type: ActionType.SET_SUBMITTED_SONG_SPEC, data: stringifiedPatternSpec })
        dispatch({ type: ActionType.SET_DISPLAYED_SONG_SPEC, data: stringifiedPatternSpec })

        await recompileAndRestart({ patternSpec, dispatch, patternId })
    }

export {
    handlePatternChange,
}
