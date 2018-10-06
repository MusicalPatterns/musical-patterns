import * as React from 'react'
import { CustomConfig, CustomConfigEntry } from '../songTypes'
import CustomConfigOption from './CustomConfigOption'
import { CustomConfigSelectorProps } from './types'

const NO_CONFIGURATION_FALLBACK: JSX.Element[] = [ <span key={0}>no configuration</span> ]

const CustomConfigSelector: (customConfigSelectorProps: CustomConfigSelectorProps) => JSX.Element =
    (customConfigSelectorProps: CustomConfigSelectorProps): JSX.Element => {
        let customConfigSelector: JSX.Element[] = NO_CONFIGURATION_FALLBACK

        const customConfig: CustomConfig = customConfigSelectorProps.song.customConfig
        const customConfigEntries: CustomConfigEntry[] = Object.entries(customConfig)
        if (!!customConfigEntries.length) {
            customConfigSelector = customConfigEntries.map(
                (customConfigEntry: CustomConfigEntry, key: number): JSX.Element =>
                    <CustomConfigOption {...{ customConfigEntry, key, customConfigSelectorProps }}/>,
            )
        }

        return (
            <div>
                <h3>custom song config</h3>
                {customConfigSelector}
            </div>
        )
    }

export default CustomConfigSelector
