import { Song, SongConfig } from '../songTypes'
import { Entity } from '../types'
import { buildEntity } from './buildEntity'
import { EntityConfig } from './types'

const defaultSongCompile: (songConfig: SongConfig) => Promise<Song> =
    async (songConfig: SongConfig): Promise<Song> => ({
        entities: songConfig.entityConfigs.map((entityConfig: EntityConfig): Entity =>
            buildEntity(entityConfig, songConfig)),
        songId: songConfig.songId,
    })

export {
    defaultSongCompile,
}
