import { AllPatterns, buildPatterns, filter, PatternId, Patterns } from '@musical-patterns/registry'
import * as patterns from './patterns'

const allPatterns: AllPatterns = patterns as AllPatterns

let selectedPatterns: Patterns = filter(allPatterns)

const whitelist: PatternId[] = []

if (whitelist.length) {
    selectedPatterns = whitelist.reduce(
        (whitelistedPatterns: Patterns, patternId: PatternId): Patterns =>
            ({
                ...whitelistedPatterns,
                [ patternId ]: selectedPatterns[ patternId ],
            }),
        buildPatterns({}),
    )
}

export {
    selectedPatterns,
}
