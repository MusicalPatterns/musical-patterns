import * as React from 'react'
import { StandardConfigOptionProps } from './types'

const StandardConfigOption: (standardConfigOptionProps: StandardConfigOptionProps) => JSX.Element =
    (standardConfigOptionProps: StandardConfigOptionProps): JSX.Element => {
        const {standardConfigEntry, standardConfigSelectorProps} = standardConfigOptionProps
        const [standardConfigKey, standardConfigValue] = standardConfigEntry
        const {
            song,
            entities,
            handleStandardConfigChangeEvent,
            handleConfigSubmitEvent,
        } = standardConfigSelectorProps
        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleStandardConfigChangeEvent(event, standardConfigKey, song)
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleConfigSubmitEvent(event, entities, song)
            }
        const value: string = standardConfigValue.toString()

        return (
            <div>
                {standardConfigKey}
                <input {...{onChange, onKeyPress, value}}/>
            </div>
        )
    }

export default StandardConfigOption
