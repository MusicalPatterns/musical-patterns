import { ThreadSpec } from '@musical-patterns/performer'
import { Pattern, PatternMaterial } from '../patterns'
import { compileThreadSpecs } from './threads'
import { Entity, Scale } from './types'

const compilePattern: (compilePatternParameters: Pattern) => Promise<ThreadSpec[]> =
    async ({ spec, material }: Pattern): Promise<ThreadSpec[]> => {
        const { buildEntitiesFunction, buildScalesFunction }: PatternMaterial = material

        const entities: Entity[] = buildEntitiesFunction(spec)
        const scales: Scale[] = buildScalesFunction(spec)

        return compileThreadSpecs({ entities, scales })
    }

export {
    compilePattern,
}
