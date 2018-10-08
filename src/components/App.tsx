import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { handleConfigSubmit } from '../interface/handleConfigSubmit'
import { handleSongChange } from '../interface/handleSongChange'
import { State } from '../interface/state'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import { Entities } from '../types'
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
        handleConfigChangeEvent: (event: React.SyntheticEvent, configKey: string, song: Song): void => {
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            song.handleConfigChange(dispatch, configKey, configValue, song)
        },
        handleConfigSubmitEvent: async (event: React.KeyboardEvent, entities: Entities, song: Song): Promise<void> => {
            if (event.key !== SUBMIT) {
                return
            }

            await handleConfigSubmit(dispatch, entities, song)
        },
        handleSongChangeEvent: async (event: React.SyntheticEvent, entities: Entities): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songName: SongName = target.value as SongName
            const song: Song = songs[songName]

            await handleSongChange(dispatch, song, entities)
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
