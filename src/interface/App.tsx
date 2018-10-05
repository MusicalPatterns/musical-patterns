import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import { Entity } from '../types'
import AppPresenter from './AppPresenter'
import { handleConfigChange } from './handleConfigChange'
import { handleSongChange } from './handleSongChange'
import { State } from './state'
import { AppPropsFromDispatch, AppPropsFromState } from './types'

const RADIX: number = 10

const mapStateToProps: (state: State) => AppPropsFromState =
    (state: State): AppPropsFromState => ({
        config: state.get('config'),
        entities: state.get('entities'),
        songName: state.get('songName'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => AppPropsFromDispatch =
    (dispatch: Dispatch): AppPropsFromDispatch => ({
        handleConfigChangeEvent: async (
            event: React.SyntheticEvent<HTMLInputElement>,
            configKey: string,
            entities: Entity[],
            songName: SongName,
        ): Promise<void> => {
            const target: HTMLInputElement = event.target as HTMLInputElement
            if (target.value === '') {
                return
            }
            const updateSongConfigData: number = parseInt(target.value, RADIX)

            await handleConfigChange(dispatch, updateSongConfigData, entities, songName, configKey)
        },
        handleSongChangeEvent: async (
            event: React.SyntheticEvent<HTMLSelectElement>,
            entities: Entity[],
        ): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songName: SongName = target.value as SongName
            const song: Song = songs[songName]

            await handleSongChange(dispatch, song, entities)
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
