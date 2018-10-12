import * as React from 'react'
import ConfigSelector from './ConfigSelector'
import SongSelector from './SongSelector'
import { AppProps, ConfigSelectorProps, SongSelectorProps } from './types'

const AppPresenter: (appProps: AppProps) => JSX.Element =
    (appProps: AppProps): JSX.Element => {
        const {
            actualCurrentConfig,
            entities,
            handleConfigBlurEvent,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            handleSongChangeEvent,
            interfaceConfig,
            invalidInputs,
            isNoSongSelected,
            song,
            unsubmittedInputs,
        } = appProps
        const songSelectorProps: SongSelectorProps = {
            entities,
            handleSongChangeEvent,
            song,
        }
        const configSelectorProps: ConfigSelectorProps = {
            actualCurrentConfig,
            entities,
            handleConfigBlurEvent,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            interfaceConfig,
            invalidInputs,
            song,
            unsubmittedInputs,
        }

        return (
            <div>
                <h1>Fun Musical Ideas</h1>
                <SongSelector {...songSelectorProps}/>
                {isNoSongSelected || <ConfigSelector {...configSelectorProps}/>}
            </div>
        )
    }

export default AppPresenter
