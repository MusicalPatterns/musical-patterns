import * as React from 'react'
import { ConfigOptionProps } from './types'

const ConfigOption: (configOptionProps: ConfigOptionProps) => JSX.Element =
    (configOptionProps: ConfigOptionProps): JSX.Element => {
        const { configKey, configValue, configSelectorProps, invalid, unsubmitted } = configOptionProps
        const {
            entities,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            handleConfigBlurEvent,
            song,
            ui,
        } = configSelectorProps

        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigChangeEvent({ configKey, event, ui })
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent({ configKey, entities, event, song, ui })
            }
        const onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigBlurEvent({ configKey, event, ui })
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
