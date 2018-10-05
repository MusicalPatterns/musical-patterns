import * as React from 'react'
import { CustomConfigOptionProps } from './types'

const CustomConfigOption: (customConfigOptionProps: CustomConfigOptionProps) => JSX.Element =
    (customConfigOptionProps: CustomConfigOptionProps): JSX.Element => {
        const {customConfigEntry, customConfigSelectorProps} = customConfigOptionProps
        const [customConfigKey, customConfigValue] = customConfigEntry
        const {entities, handleCustomConfigChangeEvent, songName} = customConfigSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleCustomConfigChangeEvent(event, customConfigKey, entities, songName)
            }
        const value: string = customConfigValue.toString()

        return (
            <div>
                {customConfigKey}
                <input {...{onChange, value}}/>
            </div>
        )
    }

export default CustomConfigOption
