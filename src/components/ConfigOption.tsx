import * as React from 'react'
import { ConfigOptionProps } from './types'

const ConfigOption: (configOptionProps: ConfigOptionProps) => JSX.Element =
    (configOptionProps: ConfigOptionProps): JSX.Element => {
        const { configEntry, configSelectorProps } = configOptionProps
        const [ configKey, configValue ] = configEntry
        const {
            song,
            entities,
            interfaceConfig,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
        } = configSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigChangeEvent({ event, configKey, interfaceConfig })
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent({ event, entities, song, interfaceConfig })
            }

        return (
            <div>
                {configKey}
                <input {...{ onChange, onKeyPress, value: configValue }}/>
            </div>
        )
    }

export default ConfigOption
