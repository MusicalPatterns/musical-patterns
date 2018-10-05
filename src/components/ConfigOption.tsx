import * as React from 'react'
import { ConfigEntry, ConfigSelectorProps } from './types'

const configOption: (configEntry: ConfigEntry, key: number, configSelectorProps: ConfigSelectorProps) => JSX.Element =
    ([configKey, configValue]: ConfigEntry, key: number, configSelectorProps: ConfigSelectorProps): JSX.Element => {
        const {entities, handleConfigChangeEvent, songName} = configSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleConfigChangeEvent(event, configKey, entities, songName)
            }
        const value: string = configValue.toString()

        return (
            <div {...{key}}>
                {configKey}
                <input {...{onChange, value}}/>
            </div>
        )
    }

export default configOption
