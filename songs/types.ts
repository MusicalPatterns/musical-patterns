import { BuildEntitiesFunction, BuildScalesFunction, Scalar } from '../src'
import { SongId } from './songId'

interface SongMaterial {
    buildEntitiesFunction: BuildEntitiesFunction,
    buildScalesFunction: BuildScalesFunction,
}

interface SongMetadata {
    description: string,
    formattedName: string,
}

interface SongSpec {
    songDurationScalar: Scalar,
    songPitchScalar: Scalar,

    // tslint:disable-next-line:no-any
    [index: string]: any,
}

interface Song {
    material: SongMaterial,
    metadata: SongMetadata,
    songId: SongId,
    spec: SongSpec,
}

type Songs = {[index in SongId]: Song}

export {
    Song,
    Songs,
    SongMetadata,
    SongMaterial,
    SongSpec,
}
