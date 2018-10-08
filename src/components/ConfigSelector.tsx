import * as React from 'react'
import { Config } from '../songTypes'
import ConfigOption from './ConfigOption'
import { ConfigSelectorProps } from './types'

const ConfigSelector: (configSelectorProps: ConfigSelectorProps) => JSX.Element =
    (configSelectorProps: ConfigSelectorProps): JSX.Element => {
        const config: Config = configSelectorProps.song.config
        const configSelector: JSX.Element[] = Object.entries(config).map(
            (configEntry: [string, string], key: number): JSX.Element =>
                <ConfigOption {...{ configEntry, key, configSelectorProps }} />,
        )

        return (
            <div>
                <h3>song config</h3>
                {configSelector}
            </div>
        )
    }

export default ConfigSelector
