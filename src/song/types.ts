import { BuildEntitiesFunction, BuildScalesFunction } from '../compile'
import { Scalar } from '../nominal'
import { SongID, SongSpec } from './songs'

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

type ForEverySongId<T> = {[P in SongID]: T}

export {
    Song,
    BaseSongSpec,
    SongMetadata,
    SongMaterial,
    SongSpec,
    ForEverySongId,
}
