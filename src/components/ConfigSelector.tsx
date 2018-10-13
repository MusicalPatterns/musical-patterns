import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { emptySong } from '../ui/emptySong'
import { handleConfigBlur } from '../ui/handleConfigBlur'
import { handleConfigChange } from '../ui/handleConfigChange'
import { handleConfigSubmit } from '../ui/handleConfigSubmit'
import { State, UI } from '../ui/state'
import {
    HandleConfigBlurEventParameters,
    HandleConfigChangeEventParameters,
    HandleConfigSubmitEventParameters,
} from '../ui/types'
import ConfigOption from './ConfigOption'
import { ConfigSelectorProps, ConfigSelectorPropsFromDispatch, ConfigSelectorPropsFromState } from './types'

const SUBMIT: string = 'Enter'

const mapStateToProps: (state: State) => ConfigSelectorPropsFromState =
    (state: State): ConfigSelectorPropsFromState =>
        ({
            entities: state.get('entities'),
            song: state.get('song') || emptySong,
            ui: state.get('ui'),
        })

const mapDispatchToProps: (dispatch: Dispatch) => ConfigSelectorPropsFromDispatch =
    (dispatch: Dispatch): ConfigSelectorPropsFromDispatch => ({
        handleConfigBlurEvent: async (parameters: HandleConfigBlurEventParameters): Promise<void> => {
            const { event, ...otherParameters } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            handleConfigBlur({ configValue, dispatch, ...otherParameters })
        },
        handleConfigChangeEvent: (parameters: HandleConfigChangeEventParameters): void => {
            const { event, ...otherParameters } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            handleConfigChange({ dispatch, configValue, ...otherParameters })
        },
        handleConfigSubmitEvent: async (parameters: HandleConfigSubmitEventParameters): Promise<void> => {
            const { event, ...otherParameters } = parameters

            if (event.key !== SUBMIT) {
                return
            }
            const target: HTMLInputElement = event.target as HTMLInputElement
            const configValue: string = target.value

            await handleConfigSubmit({ ...otherParameters, configValue, dispatch })
        },
    })

const ConfigSelector: (configSelectorProps: ConfigSelectorProps) => JSX.Element =
    (configSelectorProps: ConfigSelectorProps): JSX.Element => {
        const { ui }: ConfigSelectorProps = configSelectorProps
        const { displayedConfig, invalidConfigInputs, unsubmittedConfigInputs }: UI = ui
        const configSelector: JSX.Element[] = Object.keys(displayedConfig).sort().map(
            (configKey: string, key: number): JSX.Element => {
                const configValue: string = displayedConfig[ configKey ]
                const invalid: boolean = invalidConfigInputs[ configKey ]
                const unsubmitted: boolean = unsubmittedConfigInputs[ configKey ]

                return <ConfigOption {...{ configKey, configValue, key, configSelectorProps, invalid, unsubmitted }} />
            },
        )

        return (
            <div>
                <h3>song config</h3>
                {configSelector}
            </div>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigSelector)
