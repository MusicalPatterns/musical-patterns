import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { SongName } from '../songTypes'
import { handleConfigBlur } from '../ui/handleConfigBlur'
import { handleConfigChange } from '../ui/handleConfigChange'
import { handleConfigSubmit } from '../ui/handleConfigSubmit'
import { handleSongChange } from '../ui/handleSongChange'
import { State, UI } from '../ui/state'
import {
    HandleConfigBlurEventParameters,
    HandleConfigChangeEventParameters,
    HandleConfigSubmitEventParameters,
    HandleSongChangeEventParameters,
} from '../ui/types'
import AppPresenter from './AppPresenter'
import { AppPropsFromDispatch, AppPropsFromState } from './types'

const SUBMIT: string = 'Enter'

const mapStateToProps: (state: State) => AppPropsFromState =
    (state: State): AppPropsFromState => {
        const {
            displayedConfig,
            invalidConfigInputs,
            submittedConfig,
            unsubmittedConfigInputs,
        }: UI = state.get('ui')

        return {
            displayedConfig,
            entities: state.get('entities'),
            invalidConfigInputs,
            song: state.get('song'),
            submittedConfig,
            unsubmittedConfigInputs,
        }
    }

const mapDispatchToProps: (dispatch: Dispatch) => AppPropsFromDispatch =
    (dispatch: Dispatch): AppPropsFromDispatch => ({
        handleConfigBlurEvent: async (parameters: HandleConfigBlurEventParameters): Promise<void> => {
            const { configKey, event, submittedConfig, unsubmittedConfigInputs } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            handleConfigBlur({ configKey, configValue, dispatch, submittedConfig, unsubmittedConfigInputs })
        },
        handleConfigChangeEvent: (parameters: HandleConfigChangeEventParameters): void => {
            const { event, configKey, displayedConfig, invalidConfigInputs } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            handleConfigChange({ dispatch, configKey, configValue, displayedConfig, invalidConfigInputs })
        },
        handleConfigSubmitEvent: async (parameters: HandleConfigSubmitEventParameters): Promise<void> => {
            const {
                configKey,
                event,
                entities,
                invalidConfigInputs,
                song,
                submittedConfig,
                unsubmittedConfigInputs,
            } = parameters

            if (event.key !== SUBMIT) {
                return
            }
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            await handleConfigSubmit({
                configKey,
                configValue,
                dispatch,
                entities,
                invalidConfigInputs,
                song,
                submittedConfig,
                unsubmittedConfigInputs,
            })
        },
        handleSongChangeEvent: async ({ event, entities }: HandleSongChangeEventParameters): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songName: SongName = target.value as SongName

            await handleSongChange({ dispatch, songName, entities })
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
