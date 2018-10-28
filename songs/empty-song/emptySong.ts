import { Entity, Scale, to } from '../../src'
import { SongId } from '../songId'
import { Song, SongMaterial, SongMetadata, SongSpec } from '../types'

const emptySongSpec: SongSpec = {
    songDurationScalar: to.Scalar(1),
    songPitchScalar: to.Scalar(1),
}

const emptySongMetadata: SongMetadata = {
    description: '',
    formattedName: '',
}

const emptySongMaterial: SongMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const emptySong: Song = {
    material: emptySongMaterial,
    metadata: emptySongMetadata,
    songId: SongId._EMPTY_SONG,
    spec: emptySongSpec,
}

export {
    emptySongSpec,
    emptySongMetadata,
    emptySongMaterial,
    emptySong,
}
