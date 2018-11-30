import { AllPatterns, Pattern } from '@musical-patterns/pattern'
import * as patternSubmodules from './patternSubmodules'

const patternsAccumulator: Partial<AllPatterns> = {}

const patterns: AllPatterns = Object.values(patternSubmodules)
    .reduce(
        (patternsSoFar: Partial<AllPatterns>, nextPattern: Pattern): Partial<AllPatterns> =>
            ({ ...patternsSoFar, [ nextPattern.patternId ]: nextPattern }),
        patternsAccumulator,
    ) as AllPatterns

export {
    patterns,
}
