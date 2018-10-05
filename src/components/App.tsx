import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Core } from '../../songs/beaten-path/src/types'
import * as beatenPathFrom from '../../songs/beaten-path/src/utilities/from'
import * as beatenPathTo from '../../songs/beaten-path/src/utilities/to'
import { DECIMAL } from '../constants'
import { handleCustomConfigChange } from '../interface/handleCustomConfigChange'
import { handleSongChange } from '../interface/handleSongChange'
import { handleStandardConfigChange } from '../interface/handleStandardConfigChange'
import { State } from '../interface/state'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import { Entities } from '../types'
import { Frequency } from '../utilities/nominalTypes'
import * as to from '../utilities/to'
import AppPresenter from './AppPresenter'
import { AppPropsFromDispatch, AppPropsFromState } from './types'

const mapStateToProps: (state: State) => AppPropsFromState =
    (state: State): AppPropsFromState => ({
        customConfig: state.get('customConfig'),
        entities: state.get('entities'),
        songName: state.get('songName'),
        standardConfig: state.get('standardConfig'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => AppPropsFromDispatch =
    (dispatch: Dispatch): AppPropsFromDispatch => ({
        handleCustomConfigChangeEvent: async (
            event: React.SyntheticEvent<HTMLInputElement>,
            customConfigKey: string,
            entities: Entities,
            songName: SongName,
        ): Promise<void> => {
            const target: HTMLInputElement = event.target as HTMLInputElement

            const updateCustomConfigData: Core = beatenPathTo.Core(parseInt(target.value, DECIMAL))
            if (!(beatenPathFrom.Core(updateCustomConfigData) > 1)) {
                return
            }

            await handleCustomConfigChange(dispatch, updateCustomConfigData, entities, songName, customConfigKey)
        },
        handleSongChangeEvent: async (
            event: React.SyntheticEvent<HTMLSelectElement>,
            entities: Entities,
        ): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songName: SongName = target.value as SongName
            const song: Song = songs[songName]

            await handleSongChange(dispatch, song, entities)
        },
        handleStandardConfigChangeEvent: async (
            event: React.SyntheticEvent<HTMLInputElement>,
            standardConfigKey: string,
            entities: Entities,
            songName: SongName,
        ): Promise<void> => {
            const target: HTMLInputElement = event.target as HTMLInputElement

            const updateStandardConfigData: Frequency = to.Frequency(parseInt(target.value, DECIMAL))

            await handleStandardConfigChange(dispatch, updateStandardConfigData, entities, songName, standardConfigKey)
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
