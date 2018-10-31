import * as patternsRegister from './patternsRegistry'
import { Pattern, Patterns } from './types'

const patternsAccumulator: Partial<Patterns> = {}

const patterns: Patterns = Object.values(patternsRegister)
    .reduce(
        (patternsSoFar: Partial<Patterns>, nextPattern: Pattern): Partial<Patterns> =>
            ({ ...patternsSoFar, [ nextPattern.patternId ]: nextPattern }),
        patternsAccumulator,
    ) as Patterns

export {
    patterns,
}
