import { PatternId } from '@musical-patterns/registry'
import { AllPatterns, Patterns } from '@musical-patterns/utilities'
import { filteredPatternsRegistry } from '../patterns'
import { PatternsFilter } from './types'

const patternsFilter: PatternsFilter =
    (patterns: AllPatterns): Patterns => {
        const patternIds: PatternId[] = Object.keys(patterns) as PatternId[]
        const filteredPatternIds: PatternId[] = patternIds
            .sort()
            .filter((patternId: PatternId): boolean =>
                filteredPatternsRegistry.every((filteredPatternId: PatternId): boolean =>
                    patternId !== filteredPatternId),
            )

        return filteredPatternIds
            .reduce(
                (filteredPatterns: Patterns, patternId: PatternId): Patterns =>
                    ({ ...filteredPatterns, [ patternId ]: patterns[ patternId ] }),
                // tslint:disable-next-line:no-object-literal-type-assertion
                {} as Patterns,
            )
    }

export {
    patternsFilter,
}
