import * as React from 'react'
import { ConfigOptionProps } from './types'

const ConfigOption: (configOptionProps: ConfigOptionProps) => JSX.Element =
    (configOptionProps: ConfigOptionProps): JSX.Element => {
        const { configEntry, configSelectorProps, invalid, unsubmitted } = configOptionProps
        const [ configKey, configValue ] = configEntry
        const {
            displayedConfig,
            entities,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            handleConfigBlurEvent,
            invalidConfigInputs,
            song,
            submittedConfig,
            unsubmittedConfigInputs,
        } = configSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigChangeEvent({ configKey, event, displayedConfig, invalidConfigInputs })
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent({
                    configKey,
                    entities,
                    event,
                    invalidConfigInputs,
                    song,
                    submittedConfig,
                    unsubmittedConfigInputs,
                })
            }
        const onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigBlurEvent({ configKey, event, submittedConfig, unsubmittedConfigInputs })
            }
        const className: string = invalid ? 'invalid' : unsubmitted ? 'unsubmitted' : ''

        return (
            <div>
                {configKey}
                <input {...{ onChange, onKeyPress, value: configValue, className, onBlur }}/>
            </div>
        )
    }

export default ConfigOption
