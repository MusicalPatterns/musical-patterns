import { Dispatch } from 'redux'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import { Entity } from '../types'
import { ActionType } from './actions'
import { recompileAndRestart } from './recompileAndRestart'
import { Config } from './state'
import { stopPreviousSong } from './stopPreviousSong'

const handleConfigChange: (
    dispatch: Dispatch,
    updateSongConfigData: number,
    entities: Entity[],
    songName: SongName,
    configKey: string,
) => Promise<void> =
    async (
        dispatch: Dispatch,
        updateSongConfigData: number,
        entities: Entity[],
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
