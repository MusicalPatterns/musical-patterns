import * as React from 'react'
import { StandardConfig, StandardConfigEntry } from '../songTypes'
import StandardConfigOption from './StandardConfigOption'
import { StandardConfigSelectorProps } from './types'

const StandardConfigSelector: (standardConfigSelectorProps: StandardConfigSelectorProps) => JSX.Element =
    (standardConfigSelectorProps: StandardConfigSelectorProps): JSX.Element => {
        const standardConfig: StandardConfig = standardConfigSelectorProps.song.standardConfig
        const standardConfigSelector: JSX.Element[] = Object.entries(standardConfig).map(
            (standardConfigEntry: StandardConfigEntry, key: number): JSX.Element =>
                <StandardConfigOption {...{standardConfigEntry, key, standardConfigSelectorProps}} />,
        )

        return (
            <div>
                <h3>standard song config</h3>
                {standardConfigSelector}
            </div>
        )
    }

export default StandardConfigSelector
