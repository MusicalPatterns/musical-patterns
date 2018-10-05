import { Dispatch } from 'redux'
import { Core } from '../../songs/beaten-path/src/types'
import { songs } from '../song'
import { CustomConfig, Song, SongName } from '../songTypes'
import { Entities } from '../types'
import { ActionType } from './actions'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'

const handleCustomConfigChange: (
    dispatch: Dispatch,
    updateCustomConfigData: Core,
    entities: Entities,
    songName: SongName,
    customConfigKey: string,
) => Promise<void> =
    async (
        dispatch: Dispatch,
        updateCustomConfigData: Core,
        entities: Entities,
        songName: SongName,
        customConfigKey: string,
    ): Promise<void> => {
        const customConfigChanges: CustomConfig = {[customConfigKey]: updateCustomConfigData}
        const baseSong: Song = songs[songName]
        const updatedCustomConfig: CustomConfig = {...baseSong.customConfig, ...customConfigChanges}
        const newSong: Song = {...baseSong, customConfig: updatedCustomConfig}

        stopPreviousSong(entities)

        dispatch({type: ActionType.SET_CONFIG_AND_NAME_FROM_SONG, data: newSong})

        await recompileAndRestart(newSong, dispatch)
    }

export {
    handleCustomConfigChange,
}
