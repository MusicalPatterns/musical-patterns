// tslint:disable:no-unsafe-any

import * as React from 'react'
import { songs } from '../song'
import { Song, SongName } from '../songTypes'
import { Entity } from '../types'
import { Config } from './state'
import { AppProps, HandleConfigChangeEvent } from './types'

const NO_CONFIGURATION_MESSAGE: string = 'no configuration'

const createConfiguration: (
    config: Config,
    entities: Entity[],
    handleConfigChangeEvent: HandleConfigChangeEvent,
    songName: SongName,
) => JSX.Element[] =
    (
        config: Config,
        entities: Entity[],
        handleConfigChangeEvent: HandleConfigChangeEvent,
        songName: SongName,
    ): JSX.Element[] =>
        Object.entries(config).map(([configKey, configValue]: [string, number], key: number): JSX.Element =>
            (
                <div {...{key}}>{configKey}<input
                    onChange={(event: React.SyntheticEvent<HTMLInputElement>): void => {
                        handleConfigChangeEvent(event, configKey, entities, songName)
                    }}
                    value={configValue.toString()}/></div>
            ))

export default (props: AppProps): JSX.Element => {
    const {config, entities, songName, handleConfigChangeEvent, handleSongChangeEvent}: AppProps = props

    const options: JSX.Element[] = Object.values(songs).map((song: Song, key: number): JSX.Element =>
        <option {...{key, value: song.name}}>{song.formattedName}</option>)

    const songHasConfiguration: boolean = !!Object.keys(config).length

    return (
        <div>
            <h3>song selection</h3>
            <select {...{
                onChange: (event: React.SyntheticEvent<HTMLSelectElement>): void => {
                    handleSongChangeEvent(event, entities)
                },
            }}>
                {options}
            </select>
            <h3>song config</h3>
            {
                songHasConfiguration
                    ? createConfiguration(config, entities, handleConfigChangeEvent, songName)
                    : NO_CONFIGURATION_MESSAGE
            }
        </div>
    )
}
