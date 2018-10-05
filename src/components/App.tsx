import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Core } from '../../songs/beaten-path/src/types'
import * as beatenPathFrom from '../../songs/beaten-path/src/utilities/from'
import * as beatenPathTo from '../../songs/beaten-path/src/utilities/to'
import { DECIMAL } from '../constants'
import { handleConfigChange } from '../interface/handleConfigChange'
import { handleSongChange } from '../interface/handleSongChange'
import { State } from '../interface/state'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import { Entities } from '../types'
import AppPresenter from './AppPresenter'
import { AppPropsFromDispatch, AppPropsFromState } from './types'

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
            entities: Entities,
            songName: SongName,
        ): Promise<void> => {
            const target: HTMLInputElement = event.target as HTMLInputElement

            const updateSongConfigData: Core = beatenPathTo.Core(parseInt(target.value, DECIMAL))
            if (!(beatenPathFrom.Core(updateSongConfigData) > 1)) {
                return
            }

            await handleConfigChange(dispatch, updateSongConfigData, entities, songName, configKey)
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
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
