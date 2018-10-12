import * as React from 'react'
import { ConfigOptionProps } from './types'

const ConfigOption: (configOptionProps: ConfigOptionProps) => JSX.Element =
    (configOptionProps: ConfigOptionProps): JSX.Element => {
        const { configEntry, configSelectorProps, invalid, unsubmitted } = configOptionProps
        const [ configKey, configValue ] = configEntry
        const {
            song,
            entities,
            actualCurrentConfig,
            interfaceConfig,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            handleConfigBlurEvent,
            invalidInputs,
            unsubmittedInputs,
        } = configSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigChangeEvent({ configKey, event, interfaceConfig, invalidInputs })
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent({
                    actualCurrentConfig,
                    configKey,
                    entities,
                    event,
                    invalidInputs,
                    song,
                    unsubmittedInputs,
                })
            }
        const onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigBlurEvent({ configKey, event, actualCurrentConfig, unsubmittedInputs })
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
