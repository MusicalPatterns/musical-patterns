import { AllPatterns, Pattern } from '@musical-patterns/shared'
import * as patternsRegistry from './patternsRegistry'

const patternsAccumulator: Partial<AllPatterns> = {}

const patterns: AllPatterns = Object.values(patternsRegistry)
    .reduce(
        (patternsSoFar: Partial<AllPatterns>, nextPattern: Pattern): Partial<AllPatterns> =>
            ({ ...patternsSoFar, [ nextPattern.patternId ]: nextPattern }),
        patternsAccumulator,
    ) as AllPatterns

export {
    patterns,
}
