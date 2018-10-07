import * as React from 'react'
import { CustomConfigOptionProps } from './types'

const CustomConfigOption: (customConfigOptionProps: CustomConfigOptionProps) => JSX.Element =
    (customConfigOptionProps: CustomConfigOptionProps): JSX.Element => {
        const { customConfigEntry, customConfigSelectorProps } = customConfigOptionProps
        const [ customConfigKey, customConfigValue ] = customConfigEntry
        const {
            song,
            entities,
            handleCustomConfigChangeEvent,
            handleConfigSubmitEvent,
        } = customConfigSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleCustomConfigChangeEvent(event, customConfigKey, song)
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent(event, entities, song)
            }
        const value: string = JSON.stringify(customConfigValue)

        return (
            <div>
                {customConfigKey}
                <input {...{ onChange, onKeyPress, value }}/>
            </div>
        )
    }

export default CustomConfigOption
