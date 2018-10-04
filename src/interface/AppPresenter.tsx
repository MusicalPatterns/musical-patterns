// tslint:disable:no-unsafe-any

import * as React from 'react'
import { songs } from '../song'
import { Song } from '../songTypes'
import { Config } from './state'
import { AppProps, HandleConfigChange } from './types'

const createConfiguration: (config: Config, handleConfigChange: HandleConfigChange) => JSX.Element[] =
    (config: Config, handleConfigChange: HandleConfigChange): JSX.Element[] =>
        Object.entries(config).map(([configKey, configValue]: [string, number], key: number): JSX.Element => (
            <div {...{key}}>{configKey}<input
                onChange={(event: React.SyntheticEvent<HTMLInputElement>): void => {
                    handleConfigChange(event, configKey)
                }}
                value={configValue.toString()}/></div>
        ))

export default ({config, handleConfigChange, handleSongChange}: AppProps): JSX.Element => {
    const options: JSX.Element[] = Object.values(songs).map((song: Song, key: number): JSX.Element =>
        <option {...{key, value: song.name}}>{song.formattedName}</option>)

    return (
        <div>
            <h3>idea selection</h3>
            <select {...{onChange: handleSongChange}}>
                {options}
            </select>
            <h3>idea config</h3>
            {Object.keys(config).length ? createConfiguration(config, handleConfigChange) : 'no configuration'}
        </div>

    )
}
