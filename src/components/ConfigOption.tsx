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
        } = configSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigChangeEvent({ configKey, event, interfaceConfig })
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent({ configKey, entities, event, actualCurrentConfig, song })
            }
        const className: string = invalid ? 'invalid' : unsubmitted ? 'unsubmitted' : ''
        const onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigBlurEvent({ configKey, entities, event, actualCurrentConfig, song })
            }

        return (
            <div>
                {configKey}
                <input {...{ onChange, onKeyPress, value: configValue, className, onBlur }}/>
            </div>
        )
    }

export default ConfigOption
