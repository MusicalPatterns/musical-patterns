import { Entity, Scalar, Scale } from '../src'
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

// tslint:disable-next-line:no-any
type BuildEntitiesFunction = (patternSpec?: any) => Entity[]
// tslint:disable-next-line:no-any
type BuildScalesFunction = (patternSpec?: any) => Scale[]

export {
    Pattern,
    Patterns,
    PatternMetadata,
    PatternMaterial,
    PatternSpec,
    BuildEntitiesFunction,
    BuildScalesFunction,
}
