import { filter, Patterns } from '@musical-patterns/registry'
import * as allPatterns from './allPatterns'

// tslint:disable-next-line:no-any
const patterns: Patterns = filter(allPatterns as any)

export {
    patterns,
}
