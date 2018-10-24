import { compileThread } from '../../src/compile/compileThread'
import { Thread } from '../../src/types'

const mockThread: Thread = compileThread({
    entity: {},
    scales: [],
})

export {
    mockThread,
}
