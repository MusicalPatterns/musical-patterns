import { Entity } from '../compile'
import { to } from '../nominal'
import { BaseSongSpec, Song, SongMaterial, SongMetadata } from '../song'
import { Scales } from '../types'

const emptySongSpec: BaseSongSpec = {
    songDurationScalar: to.Scalar(1),
    songPitchScalar: to.Scalar(1),
}

const emptySongMetadata: SongMetadata = {
    description: '',
    formattedName: '',
}

const emptySongMaterial: SongMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
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
