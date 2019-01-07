import { AllPatterns, filter, Patterns } from '@musical-patterns/registry'
import * as allPatterns from './allPatterns'

let patterns: Patterns = filter(allPatterns as AllPatterns)

export {
    patterns,
}
