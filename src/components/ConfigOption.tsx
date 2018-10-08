import * as React from 'react'
import { ConfigOptionProps } from './types'

const ConfigOption: (configOptionProps: ConfigOptionProps) => JSX.Element =
    (configOptionProps: ConfigOptionProps): JSX.Element => {
        const { configEntry, configSelectorProps } = configOptionProps
        const [ configKey, configValue ] = configEntry
        const {
            song,
            entities,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
        } = configSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigChangeEvent(event, configKey, song)
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent(event, entities, song)
            }
        const value: string = JSON.stringify(configValue)

        return (
            <div>
                {configKey}
                <input {...{ onChange, onKeyPress, value }}/>
            </div>
        )
    }

export default ConfigOption
