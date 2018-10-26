import { compileThread, Thread } from '../../src/indexForTest'

const mockThread: Thread = compileThread({
    entity: {},
    scales: [],
})

export {
    mockThread,
}
