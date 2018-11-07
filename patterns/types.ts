import { BuildEntitiesFunction, BuildScalesFunction, Scalar } from '../src'
import { PatternId } from './patternId'

interface PatternMaterial {
    buildEntitiesFunction: BuildEntitiesFunction,
    buildScalesFunction: BuildScalesFunction,
}

interface PatternMetadata {
    description: string,
    formattedName: string,
    musicalIdeaIllustrated: string,
}

interface PatternSpec {
    patternDurationScalar: Scalar,
    patternPitchScalar: Scalar,

    // tslint:disable-next-line:no-any
    [index: string]: any,
}

interface Pattern {
    material: PatternMaterial,
    metadata: PatternMetadata,
    patternId: PatternId,
    spec: PatternSpec,
}

type Patterns = {[index in PatternId]: Pattern}

export {
    Pattern,
    Patterns,
    PatternMetadata,
    PatternMaterial,
    PatternSpec,
}
