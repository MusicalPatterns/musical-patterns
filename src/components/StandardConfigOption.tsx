import * as React from 'react'
import { StandardConfigOptionProps } from './types'

const StandardConfigOption: (standardConfigOptionProps: StandardConfigOptionProps) => JSX.Element =
    (standardConfigOptionProps: StandardConfigOptionProps): JSX.Element => {
        const {standardConfigEntry, standardConfigSelectorProps} = standardConfigOptionProps
        const [standardConfigKey, standardConfigValue] = standardConfigEntry
        const {entities, handleStandardConfigChangeEvent, songName} = standardConfigSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleStandardConfigChangeEvent(event, standardConfigKey, entities, songName)
            }
        const value: string = standardConfigValue.toString()

        return (
            <div>
                {standardConfigKey}
                <input {...{onChange, value}}/>
            </div>
        )
    }

export default StandardConfigOption
