import { Config, Song } from '../songTypes'
import { destringifyConfig } from './destringifyConfig'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'
import { HandleConfigSubmitParameters } from './types'

const handleConfigSubmit: (handleConfigSubmitParameters: HandleConfigSubmitParameters) => Promise<void> =
    async ({ dispatch, entities, song, interfaceConfig }: HandleConfigSubmitParameters): Promise<void> => {
        stopPreviousSong(entities)

        const updatedConfig: Config = destringifyConfig(interfaceConfig)
        const newSong: Song = { ...song, config: updatedConfig }

        await recompileAndRestart(newSong, dispatch)
    }

export {
    handleConfigSubmit,
}
