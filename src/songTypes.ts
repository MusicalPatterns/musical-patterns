import { BuildEntitiesFunction, BuildScalesFunction } from './compile/types'
import { SongSpec } from './songs'
import { Scalar } from './utilities/nominalTypes'

interface BaseSongSpec {
    songDurationScalar: Scalar,
    songPitchScalar: Scalar,
}

interface Song {
    material: SongMaterial,
    metadata: SongMetadata,
    spec: SongSpec,
}

interface SongMetadata {
    description: string,
    formattedName: string,
}

interface SongMaterial {
    buildEntitiesFunction: BuildEntitiesFunction,
    buildScalesFunction: BuildScalesFunction,
}

export {
    Song,
    BaseSongSpec,
    SongMetadata,
    SongMaterial,
}
