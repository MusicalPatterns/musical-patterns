import { SongMaterial } from '../song'
import { Scales, Threads } from '../types'
import { compileThreads } from './compileThreads'
import { CompileSongParameters, Entity } from './types'

const compileSong: (compileSongParameters: CompileSongParameters) => Promise<Threads> =
    async ({ songSpec, songMaterial }: CompileSongParameters): Promise<Threads> => {
        const { buildEntitiesFunction, buildScalesFunction }: SongMaterial = songMaterial

        const entities: Entity[] = buildEntitiesFunction(songSpec)
        const scales: Scales = buildScalesFunction(songSpec)

        return compileThreads({ entities, scales })
    }

export {
    compileSong,
}
