import { SongMaterial } from '../song'
import { Scale, Thread } from '../types'
import { compileThreads } from './compileThreads'
import { CompileSongParameters, Entity } from './types'

const compileSong: (compileSongParameters: CompileSongParameters) => Promise<Thread[]> =
    async ({ songSpec, songMaterial }: CompileSongParameters): Promise<Thread[]> => {
        const { buildEntitiesFunction, buildScalesFunction }: SongMaterial = songMaterial

        const entities: Entity[] = buildEntitiesFunction(songSpec)
        const scales: Scale[] = buildScalesFunction(songSpec)

        return compileThreads({ entities, scales })
    }

export {
    compileSong,
}
