import * as React from 'react'
import ConfigOption from './ConfigOption'
import { ConfigSelectorProps, InterfaceConfigEntry } from './types'

const ConfigSelector: (configSelectorProps: ConfigSelectorProps) => JSX.Element =
    (configSelectorProps: ConfigSelectorProps): JSX.Element => {
        const { interfaceConfig, invalidInputs, unsubmittedInputs } = configSelectorProps
        const configSelector: JSX.Element[] = Object.keys(interfaceConfig).sort().map(
            (interfaceConfigKey: string, key: number): JSX.Element => {
                const configEntry: InterfaceConfigEntry = [ interfaceConfigKey, interfaceConfig[interfaceConfigKey] ]
                const invalid: boolean = invalidInputs[ interfaceConfigKey ]
                const unsubmitted: boolean = unsubmittedInputs[ interfaceConfigKey ]

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
