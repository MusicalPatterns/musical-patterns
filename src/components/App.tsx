import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { handleConfigBlur } from '../interface/handleConfigBlur'
import { handleConfigChange } from '../interface/handleConfigChange'
import { handleConfigSubmit } from '../interface/handleConfigSubmit'
import { handleSongChange } from '../interface/handleSongChange'
import { State } from '../interface/state'
import {
    HandleConfigBlurEventParameters,
    HandleConfigChangeEventParameters,
    HandleConfigSubmitEventParameters,
    HandleSongChangeEventParameters,
} from '../interface/types'
import { SongName } from '../songTypes'
import AppPresenter from './AppPresenter'
import { AppPropsFromDispatch, AppPropsFromState } from './types'

const SUBMIT: string = 'Enter'

const mapStateToProps: (state: State) => AppPropsFromState =
    (state: State): AppPropsFromState => ({
        actualCurrentConfig: state.get('actualCurrentConfig'),
        entities: state.get('entities'),
        interfaceConfig: state.get('interfaceConfig'),
        invalidInputs: state.get('invalidInputs'),
        song: state.get('song'),
        unsubmittedInputs: state.get('unsubmittedInputs'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => AppPropsFromDispatch =
    (dispatch: Dispatch): AppPropsFromDispatch => ({
        handleConfigBlurEvent: async (parameters: HandleConfigBlurEventParameters): Promise<void> => {
            const { configKey, event, actualCurrentConfig, unsubmittedInputs } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            handleConfigBlur({ configKey, configValue, dispatch, actualCurrentConfig, unsubmittedInputs })
        },
        handleConfigChangeEvent: (parameters: HandleConfigChangeEventParameters): void => {
            const { event, configKey, interfaceConfig, invalidInputs } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            handleConfigChange({ dispatch, configKey, configValue, interfaceConfig, invalidInputs })
        },
        handleConfigSubmitEvent: async (parameters: HandleConfigSubmitEventParameters): Promise<void> => {
            const {
                event,
                entities,
                song,
                configKey,
                actualCurrentConfig,
                invalidInputs,
                unsubmittedInputs,
            } = parameters

            if (event.key !== SUBMIT) {
                return
            }
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            await handleConfigSubmit({
                actualCurrentConfig,
                configKey,
                configValue,
                dispatch,
                entities,
                invalidInputs,
                song,
                unsubmittedInputs,
            })
        },
        handleSongChangeEvent: async ({ event, entities }: HandleSongChangeEventParameters): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songName: SongName = target.value as SongName

            await handleSongChange({ dispatch, songName, entities })
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
