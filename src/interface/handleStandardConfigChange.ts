import { Dispatch } from 'redux'
import { Song, StandardConfig } from '../songTypes'
import { Frequency } from '../utilities/nominalTypes'
import { ActionType } from './actions'

const handleStandardConfigChange: (
    dispatch: Dispatch,
    updateStandardConfigData: Frequency,
    standardConfigKey: string,
    song: Song,
) => void =
    (
        dispatch: Dispatch,
        updateStandardConfigData: Frequency,
        standardConfigKey: string,
        song: Song,
    ): void => {
        const standardConfigChanges: Partial<StandardConfig> = { [standardConfigKey]: updateStandardConfigData }
        const updatedStandardConfig: StandardConfig = { ...song.standardConfig, ...standardConfigChanges }
        const newSong: Song = { ...song, standardConfig: updatedStandardConfig }

        dispatch({ type: ActionType.SET_SONG, data: newSong })
    }

export {
    handleStandardConfigChange,
}
