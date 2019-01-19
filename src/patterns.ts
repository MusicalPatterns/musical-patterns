import { filter, Patterns } from '@musical-patterns/registry'
import * as allPatterns from './allPatterns'

const patterns: Patterns = filter(allPatterns)

export {
    patterns,
}
