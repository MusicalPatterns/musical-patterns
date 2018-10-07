import { Dispatch } from 'redux'
import { CustomConfig, Song } from '../songTypes'
import { ActionType } from './actions'

const handleCustomConfigChange: (
    dispatch: Dispatch,
    customConfigKey: string,
    customConfigValue: string,
    song: Song,
) => void =
    (
        dispatch: Dispatch,
        customConfigKey: string,
        customConfigValue: string,
        song: Song,
    ): void => {
        const customConfigChanges: Partial<CustomConfig> =
            song.handleCustomConfigChange(customConfigKey, customConfigValue)
        const updatedCustomConfig: CustomConfig = { ...song.customConfig, ...customConfigChanges }
        const newSong: Song = { ...song, customConfig: updatedCustomConfig }

        dispatch({ type: ActionType.SET_SONG, data: newSong })
    }

export {
    handleCustomConfigChange,
}
