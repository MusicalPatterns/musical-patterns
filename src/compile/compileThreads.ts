import { Thread, Threads } from '../types'
import { compileThread } from './compileThread'
import { CompileThreadsParameters, Entity } from './types'

const compileThreads: (compileThreadsParameters: CompileThreadsParameters) => Threads =
    ({ entities, scales }: CompileThreadsParameters): Threads =>
        entities.map((entity: Entity): Thread =>
            compileThread({ entity, scales }))

export {
    compileThreads,
}
