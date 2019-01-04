import { buildPatterns, filter, PatternId, Patterns } from '@musical-patterns/registry'
import { patterns } from './patterns'

let selectedPatterns: Patterns = filter(patterns)

const whitelist: PatternId[] = [
]

if (whitelist.length) {
    selectedPatterns = whitelist.reduce(
        (whitelistedPatterns: Patterns, patternId: PatternId): Patterns =>
            ({
                ...whitelistedPatterns,
                [ patternId ]: patterns[ patternId ],
            }),
        buildPatterns({}),
    )
}

export {
    selectedPatterns,
}
