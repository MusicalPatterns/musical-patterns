import { Dispatch } from 'redux'
import { Core } from '../../songs/beaten-path/src/types'
import { CustomConfig, Song } from '../songTypes'
import { ActionType } from './actions'

const handleCustomConfigChange: (
    dispatch: Dispatch,
    updateCustomConfigData: Core,
    customConfigKey: string,
    song: Song,
) => void =
    (
        dispatch: Dispatch,
        updateCustomConfigData: Core,
        customConfigKey: string,
        song: Song,
    ): void => {
        const customConfigChanges: CustomConfig = {[customConfigKey]: updateCustomConfigData}
        const updatedCustomConfig: CustomConfig = {...song.customConfig, ...customConfigChanges}
        const newSong: Song = {...song, customConfig: updatedCustomConfig}

        dispatch({type: ActionType.SET_SONG, data: newSong})
    }

export {
    handleCustomConfigChange,
}
