import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Core } from '../../songs/beaten-path/src/types'
import * as beatenPathTo from '../../songs/beaten-path/src/utilities/to'
import { DECIMAL } from '../constants'
import { handleConfigSubmit } from '../interface/handleConfigSubmit'
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

const SUBMIT: string = 'Enter'

const mapStateToProps: (state: State) => AppPropsFromState =
    (state: State): AppPropsFromState => ({
        entities: state.get('entities'),
        song: state.get('song'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => AppPropsFromDispatch =
    (dispatch: Dispatch): AppPropsFromDispatch => ({
        handleConfigSubmitEvent: async (event: React.KeyboardEvent, entities: Entities, song: Song): Promise<void> => {
            if (event.key !== SUBMIT) {
                return
            }

            await handleConfigSubmit(dispatch, entities, song)
        },
        handleCustomConfigChangeEvent: (event: React.SyntheticEvent, customConfigKey: string, song: Song): void => {
            const target: HTMLInputElement = event.target as HTMLInputElement

            const updateCustomConfigData: Core = beatenPathTo.Core(parseInt(target.value, DECIMAL) || 0)

            handleCustomConfigChange(dispatch, updateCustomConfigData, customConfigKey, song)
        },
        handleSongChangeEvent: async (event: React.SyntheticEvent, entities: Entities): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songName: SongName = target.value as SongName
            const song: Song = songs[songName]

            await handleSongChange(dispatch, song, entities)
        },
        handleStandardConfigChangeEvent: (event: React.SyntheticEvent, standardConfigKey: string, song: Song): void => {
            const target: HTMLInputElement = event.target as HTMLInputElement

            const updateStandardConfigData: Frequency = to.Frequency(parseInt(target.value, DECIMAL) || 0)

            handleStandardConfigChange(dispatch, updateStandardConfigData, standardConfigKey, song)
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
