import { Song } from '../songTypes'
import { Entities, Entity } from '../types'
import { buildEntity } from './buildEntity'
import { EntityConfig } from './types'

const defaultSongCompile: (song: Song) => Promise<Entities> =
    async (song: Song): Promise<Entities> =>
        song.entityConfigs.map((entityConfig: EntityConfig): Entity =>
            buildEntity(entityConfig, song))

export {
    defaultSongCompile,
}
