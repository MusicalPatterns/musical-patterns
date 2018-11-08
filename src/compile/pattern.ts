import { Pattern, PatternMaterial } from '../../patterns'
import { Scale, Thread } from '../types'
import { compileThreads } from './threads'
import { Entity } from './types'
import { from } from '../nominal'

const compilePattern: (compilePatternParameters: Pattern) => Promise<Thread[]> =
    async ({ spec, material }: Pattern): Promise<Thread[]> => {
        const { buildEntitiesFunction, buildScalesFunction }: PatternMaterial = material

        const entities: Entity[] = buildEntitiesFunction(spec)
        const scales: Scale[] = buildScalesFunction(spec)

        const threads: Thread[] = compileThreads({ entities, scales })

        // @ts-ignore
        threads.forEach(thread => {
            console.log(thread.notes.reduce(
                (acc, note) =>
                    acc + from.Time(note.duration),
                0,
            ))
        })
        console.log(threads)
        return threads
    }

export {
    compilePattern,
}
