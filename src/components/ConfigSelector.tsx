import * as React from 'react'
import configOption from './ConfigOption'
import { ConfigEntry, ConfigSelectorProps } from './types'

const NO_CONFIGURATION_FALLBACK: JSX.Element[] = [<span key={0}>no configuration</span>]

const ConfigSelector: (configSelectorProps: ConfigSelectorProps) => JSX.Element =
    (configSelectorProps: ConfigSelectorProps): JSX.Element => {
        let configSelector: JSX.Element[] = NO_CONFIGURATION_FALLBACK

        const configEntries: ConfigEntry[] = Object.entries(configSelectorProps.config)
        if (!!configEntries.length) {
            configSelector = configEntries.map((configEntry: ConfigEntry, key: number): JSX.Element =>
                configOption(configEntry, key, configSelectorProps))
        }

        return (
            <div>
                <h3>song config</h3>
                {configSelector}
            </div>
        )
    }

export default ConfigSelector
