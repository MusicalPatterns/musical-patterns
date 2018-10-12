import * as React from 'react'
import ConfigSelector from './ConfigSelector'
import SongSelector from './SongSelector'
import { AppProps, ConfigSelectorProps, SongSelectorProps } from './types'

const AppPresenter: (appProps: AppProps) => JSX.Element =
    (appProps: AppProps): JSX.Element => {
        const {
            actualCurrentConfig,
            entities,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            handleSongChangeEvent,
            interfaceConfig,
            invalidInputs,
            song,
        } = appProps
        const songSelectorProps: SongSelectorProps = {
            entities,
            handleSongChangeEvent,
            song,
        }
        const configSelectorProps: ConfigSelectorProps = {
            actualCurrentConfig,
            entities,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            interfaceConfig,
            invalidInputs,
            song,
        }

        return (
            <div>
                <h1>Fun Musical Ideas</h1>
                <SongSelector {...songSelectorProps}/>
                <ConfigSelector {...configSelectorProps}/>
            </div>
        )
    }

export default AppPresenter
