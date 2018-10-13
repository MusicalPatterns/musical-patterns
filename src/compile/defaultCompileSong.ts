import { Song, SongSpec } from '../songTypes'
import { Entity } from '../types'
import { compileEntity } from './compileEntity'
import { EntitySpec } from './types'

const defaultCompileSong: (songSpec: SongSpec) => Promise<Song> =
    async (songSpec: SongSpec): Promise<Song> => ({
        entities: songSpec.entitySpecs.map((entitySpec: EntitySpec): Entity =>
            compileEntity(entitySpec, songSpec)),
        songId: songSpec.songId,
    })

export {
    defaultCompileSong,
}
