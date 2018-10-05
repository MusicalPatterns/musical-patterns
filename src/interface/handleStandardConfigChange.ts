import { Dispatch } from 'redux'
import { songs } from '../song'
import { Song, SongName, StandardConfig } from '../songTypes'
import { Entities } from '../types'
import { Frequency } from '../utilities/nominalTypes'
import { ActionType } from './actions'
import { recompileAndRestart } from './recompileAndRestart'
import { stopPreviousSong } from './stopPreviousSong'

const handleStandardConfigChange: (
    dispatch: Dispatch,
    updateStandardConfigData: Frequency,
    entities: Entities,
    songName: SongName,
    standardConfigKey: string,
) => Promise<void> =
    async (
        dispatch: Dispatch,
        updateStandardConfigData: Frequency,
        entities: Entities,
        songName: SongName,
        standardConfigKey: string,
    ): Promise<void> => {
        const standardConfigChanges: StandardConfig = {[standardConfigKey]: updateStandardConfigData}
        const baseSong: Song = songs[songName]
        const updatedStanardConfig: StandardConfig = {...baseSong.standardConfig, ...standardConfigChanges}
        const newSong: Song = {...baseSong, standardConfig: updatedStanardConfig}

        stopPreviousSong(entities)

        dispatch({type: ActionType.SET_CONFIG_AND_NAME_FROM_SONG, data: newSong})

        await recompileAndRestart(newSong, dispatch)
    }

export {
    handleStandardConfigChange,
}
