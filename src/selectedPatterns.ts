import { filter, PatternId, Patterns } from '@musical-patterns/pattern'
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
        // tslint:disable-next-line:no-object-literal-type-assertion
        {} as Patterns,
    )
}

export {
    selectedPatterns,
}
