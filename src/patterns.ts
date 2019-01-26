import { filter, Patterns } from '@musical-patterns/pattern'
import * as allPatterns from './allPatterns'

// @ts-ignore
const patterns: Patterns = filter(allPatterns)

export {
    patterns,
}
