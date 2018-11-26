import { filteredPatternsRegistry, PatternId, Patterns } from '../patterns'
import { PartialPatterns, PatternsFilter } from './types'

const patternsFilter: PatternsFilter =
    (patterns: Patterns): PartialPatterns => {
        const patternIds: PatternId[] = Object.keys(patterns) as PatternId[]
        const filteredPatternIds: PatternId[] = patternIds
            .sort()
            .filter((patternId: PatternId): boolean =>
                filteredPatternsRegistry.every((filteredPatternId: PatternId): boolean =>
                    patternId !== filteredPatternId),
            )

        return filteredPatternIds
            .reduce(
                (filteredPatterns: PartialPatterns, patternId: PatternId): PartialPatterns =>
                    ({ ...filteredPatterns, [ patternId ]: patterns[ patternId ] }),
                // tslint:disable-next-line:no-object-literal-type-assertion
                {} as PartialPatterns,
            )
    }

export {
    patternsFilter,
}
