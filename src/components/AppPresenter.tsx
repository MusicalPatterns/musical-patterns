import * as React from 'react'
import { emptySong } from '../interface/emptySong'
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
            song,
            unsubmittedInputs,
        } = appProps
        const songSelectorProps: SongSelectorProps = {
            entities,
            handleSongChangeEvent,
        }
        const configSelectorProps: ConfigSelectorProps = {
            actualCurrentConfig,
            entities,
            handleConfigBlurEvent,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            interfaceConfig,
            invalidInputs,
            song: song || emptySong,
            unsubmittedInputs,
        }

        return (
            <div>
                <h1>Fun Musical Ideas</h1>
                <SongSelector {...songSelectorProps}/>

                {song && <div>
                    <div>
                        {song.description}
                    </div>
                    <ConfigSelector {...configSelectorProps}/>
                </div>}
            </div>
        )
    }

export default AppPresenter
