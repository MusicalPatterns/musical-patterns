import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { handleConfigChange } from '../interface/handleConfigChange'
import { handleConfigSubmit } from '../interface/handleConfigSubmit'
import { handleSongChange } from '../interface/handleSongChange'
import { State } from '../interface/state'
import {
    HandleConfigChangeEventParameters,
    HandleConfigSubmitEventParameters, HandleSongChangeEventParameters,
} from '../interface/types'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import AppPresenter from './AppPresenter'
import { AppPropsFromDispatch, AppPropsFromState } from './types'

const SUBMIT: string = 'Enter'

const mapStateToProps: (state: State) => AppPropsFromState =
    (state: State): AppPropsFromState => ({
        entities: state.get('entities'),
        interfaceConfig: state.get('interfaceConfig'),
        song: state.get('song'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => AppPropsFromDispatch =
    (dispatch: Dispatch): AppPropsFromDispatch => ({
        handleConfigChangeEvent: ({ event, configKey, interfaceConfig }: HandleConfigChangeEventParameters): void => {
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            handleConfigChange({ dispatch, configKey, configValue, interfaceConfig })
        },
        handleConfigSubmitEvent: async (parameters: HandleConfigSubmitEventParameters): Promise<void> => {
            const { event, entities, song, interfaceConfig } = parameters
            if (event.key !== SUBMIT) {
                return
            }

            await handleConfigSubmit({ dispatch, entities, song, interfaceConfig })
        },
        handleSongChangeEvent: async ({ event, entities }: HandleSongChangeEventParameters): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songName: SongName = target.value as SongName
            const song: Song = songs[songName]

            await handleSongChange({ dispatch, song, entities })
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
