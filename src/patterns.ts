import { AllPatterns, Pattern } from '@musical-patterns/pattern'
import RequireContext = __WebpackModuleApi.RequireContext

const patternContext: RequireContext = require.context('.', true, /\.\/[^\/]*\/$/)

const patternsAccumulator: Partial<AllPatterns> = {}

const patterns: AllPatterns = patternContext.keys()
    // tslint:disable-next-line:no-unsafe-any
    .map((key: string): Pattern => patternContext(key).pattern)
    .reduce(
        (patternsSoFar: Partial<AllPatterns>, nextPattern: Pattern): Partial<AllPatterns> =>
            ({ ...patternsSoFar, [ nextPattern.patternId ]: nextPattern }),
        patternsAccumulator,
    ) as AllPatterns

export {
    patterns,
}
