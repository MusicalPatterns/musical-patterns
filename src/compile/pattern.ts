import { Thread } from '@musical-patterns/performer'
import { Pattern, PatternMaterial } from '../../patterns'
import { compileThreads } from './threads'
import { Entity, Scale } from './types'

const compilePattern: (compilePatternParameters: Pattern) => Promise<Thread[]> =
    async ({ spec, material }: Pattern): Promise<Thread[]> => {
        const { buildEntitiesFunction, buildScalesFunction }: PatternMaterial = material

        const entities: Entity[] = buildEntitiesFunction(spec)
        const scales: Scale[] = buildScalesFunction(spec)

        const threads: Thread[] = compileThreads({ entities, scales })

        return threads
    }

export {
    compilePattern,
}
