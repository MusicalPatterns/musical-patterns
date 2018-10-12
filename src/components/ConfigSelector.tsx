import * as React from 'react'
import { StringifiedConfigEntry } from '../interface/state'
import ConfigOption from './ConfigOption'
import { ConfigSelectorProps } from './types'

const ConfigSelector: (configSelectorProps: ConfigSelectorProps) => JSX.Element =
    (configSelectorProps: ConfigSelectorProps): JSX.Element => {
        const { displayedConfig, invalidConfigInputs, unsubmittedConfigInputs } = configSelectorProps
        const configSelector: JSX.Element[] = Object.keys(displayedConfig).sort().map(
            (displayedConfigKey: string, key: number): JSX.Element => {
                const configEntry: StringifiedConfigEntry = [ displayedConfigKey, displayedConfig[displayedConfigKey] ]
                const invalid: boolean = invalidConfigInputs[ displayedConfigKey ]
                const unsubmitted: boolean = unsubmittedConfigInputs[ displayedConfigKey ]

                return <ConfigOption {...{ configEntry, key, configSelectorProps, invalid, unsubmitted }} />
            },
        )

        return (
            <div>
                <h3>song config</h3>
                {configSelector}
            </div>
        )
    }

export default ConfigSelector
