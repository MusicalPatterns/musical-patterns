import { Pattern, PatternMaterial } from '../../patterns'
import { Scale, Thread } from '../types'
import { compileThreads } from './threads'
import { Entity } from './types'

const compilePattern: (compilePatternParameters: Pattern) => Promise<Thread[]> =
    async ({ spec, material }: Pattern): Promise<Thread[]> => {
        const { buildEntitiesFunction, buildScalesFunction }: PatternMaterial = material

        const entities: Entity[] = buildEntitiesFunction(spec)
        const scales: Scale[] = buildScalesFunction(spec)

        return compileThreads({ entities, scales })
    }

export {
    compilePattern,
}
