import { patterns, PatternSpec } from '../../patterns'
import { ActionType, StringifiedPatternSpec, StringifiedPatternSpecInputStates } from '../state'
import { buildInitialDisabledButtons } from './buildInitialDisabledButtons'
import { recompileAndRestart } from './recompileAndRestart'
import { stopThreads } from './stopThreads'
import { stringifyPatternSpec } from './stringifyPatternSpec'
import { PatternChangeEventHandler, PatternChangeEventHandlerParameters } from './types'

const handlePatternChange: PatternChangeEventHandler =
    async ({ dispatch, patternId, threads }: PatternChangeEventHandlerParameters): Promise<void> => {
        const patternSpec: PatternSpec = patterns[ patternId ].spec

        stopThreads(threads)

        const stringifiedPatternSpec: StringifiedPatternSpec = stringifyPatternSpec(patternSpec)
        const initialDisabledButtons: StringifiedPatternSpecInputStates = buildInitialDisabledButtons(patternSpec)

        dispatch({ type: ActionType.SET_SUBMITTED_PATTERN_SPEC, data: stringifiedPatternSpec })
        dispatch({ type: ActionType.SET_DISPLAYED_PATTERN_SPEC, data: stringifiedPatternSpec })
        dispatch({ type: ActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS, data: initialDisabledButtons })

        await recompileAndRestart({ patternSpec, dispatch, patternId })
    }

export {
    handlePatternChange,
}
