import { Entities } from '../compile/types'
import { BaseSongSpec, Song, SongMaterial, SongMetadata } from '../songTypes'
import { Scales } from '../types'
import * as to from '../utilities/to'

const emptySongSpec: BaseSongSpec = {
    songDurationScalar: to.Scalar(1),
    songPitchScalar: to.Scalar(1),
}

const emptySongMetadata: SongMetadata = {
    description: '',
    formattedName: '',
}

const emptySongMaterial: SongMaterial = {
    buildEntitiesFunction: (): Entities => [],
    buildScalesFunction: (): Scales => [],
}

const emptySong: Song = {
    material: emptySongMaterial,
    metadata: emptySongMetadata,
    spec: emptySongSpec,
}

export {
    emptySongSpec,
    emptySongMetadata,
    emptySongMaterial,
    emptySong,
}
