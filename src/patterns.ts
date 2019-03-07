import { filter, Patterns } from '@musical-patterns/pattern'
import * as allPatterns from './allPatterns'

const patterns: Patterns = filter(allPatterns as unknown as Patterns)

export {
    patterns,
}
