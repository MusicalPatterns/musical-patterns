import { PatternMaterial } from '../../songs'
import { Scale, Thread } from '../types'
import { compileThreads } from './compileThreads'
import { CompilePatternParameters, Entity } from './types'

const compilePattern: (compilePatternParameters: CompilePatternParameters) => Promise<Thread[]> =
    async ({ patternSpec, patternMaterial }: CompilePatternParameters): Promise<Thread[]> => {
        const { buildEntitiesFunction, buildScalesFunction }: PatternMaterial = patternMaterial

        const entities: Entity[] = buildEntitiesFunction(patternSpec)
        const scales: Scale[] = buildScalesFunction(patternSpec)

        return compileThreads({ entities, scales })
    }

export {
    compilePattern,
}
