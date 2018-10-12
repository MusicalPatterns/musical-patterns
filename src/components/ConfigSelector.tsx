import * as React from 'react'
import { InterfaceConfig } from '../interface/types'
import ConfigOption from './ConfigOption'
import { ConfigSelectorProps, InterfaceConfigEntry } from './types'

const ConfigSelector: (configSelectorProps: ConfigSelectorProps) => JSX.Element =
    (configSelectorProps: ConfigSelectorProps): JSX.Element => {
        const interfaceConfig: InterfaceConfig = configSelectorProps.interfaceConfig
        const configSelector: JSX.Element[] = Object.keys(interfaceConfig).sort().map(
            (interfaceConfigKey: string, key: number): JSX.Element => {
                const configEntry: InterfaceConfigEntry = [ interfaceConfigKey, interfaceConfig[interfaceConfigKey] ]

                return <ConfigOption {...{ configEntry, key, configSelectorProps }} />
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
