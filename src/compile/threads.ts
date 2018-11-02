import { Thread } from '../types'
import { compileThread } from './thread'
import { CompileThreadsParameters, Entity } from './types'

const compileThreads: (compileThreadsParameters: CompileThreadsParameters) => Thread[] =
    ({ entities, scales }: CompileThreadsParameters): Thread[] =>
        entities.map((entity: Entity): Thread =>
            compileThread({ entity, scales }))

export {
    compileThreads,
}
