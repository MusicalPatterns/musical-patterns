import { Dispatch } from 'redux'
import { DECIMAL } from '../constants'
import { Config, Song } from '../songTypes'
import { ActionType } from './actions'

const defaultHandleConfigChange: (
    dispatch: Dispatch,
    configKey: string,
    configValue: string,
    song: Song,
) => void =
    (
        dispatch: Dispatch,
        configKey: string,
        configValue: string,
        song: Song,
    ): void => {
        const updatedConfig: Config = { ...song.config, ...{ [configKey]: parseInt(configValue, DECIMAL) } }
        const newSong: Song = { ...song, config: updatedConfig }

        dispatch({ type: ActionType.SET_SONG, data: newSong })
    }

export {
    defaultHandleConfigChange,
}
