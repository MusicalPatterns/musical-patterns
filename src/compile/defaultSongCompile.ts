import { Song } from '../songTypes'
import { Entity } from '../types'
import { buildEntity } from './buildEntity'
import { EntityConfig } from './types'

const defaultSongCompile: (song: Song) => Promise<Entity[]> =
    async (song: Song): Promise<Entity[]> =>
        song.entityConfigs.map((entityConfig: EntityConfig): Entity =>
            buildEntity(entityConfig, song))

export {
    defaultSongCompile,
}
