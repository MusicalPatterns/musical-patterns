import { Dispatch } from 'redux'
import { Core } from '../../songs/beaten-path/src/types'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import { Entities } from '../types'
import { ActionType } from './actions'
import { recompileAndRestart } from './recompileAndRestart'
import { Config } from './state'
import { stopPreviousSong } from './stopPreviousSong'

const handleConfigChange: (
    dispatch: Dispatch,
    updateSongConfigData: Core,
    entities: Entities,
    songName: SongName,
    configKey: string,
) => Promise<void> =
    async (
        dispatch: Dispatch,
        updateSongConfigData: Core,
        entities: Entities,
        songName: SongName,
        configKey: string,
    ): Promise<void> => {
        const configChanges: Config = {[configKey]: updateSongConfigData}
        const baseSong: Song = songs[songName]
        const updatedConfig: Config = {...baseSong.config, ...configChanges}
        const newSong: Song = {...baseSong, config: updatedConfig}

        stopPreviousSong(entities)

        dispatch({type: ActionType.SET_CONFIG_AND_NAME_FROM_SONG, data: newSong})

        await recompileAndRestart(newSong, dispatch)
    }

export {
    handleConfigChange,
}
