import * as React from 'react'
import { emptySong } from '../ui/emptySong'
import ConfigSelector from './ConfigSelector'
import SongSelector from './SongSelector'
import { AppProps, ConfigSelectorProps, SongSelectorProps } from './types'

const AppPresenter: (appProps: AppProps) => JSX.Element =
    (appProps: AppProps): JSX.Element => {
        const {
            displayedConfig,
            entities,
            handleConfigBlurEvent,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            handleSongChangeEvent,
            invalidConfigInputs,
            song,
            submittedConfig,
            unsubmittedConfigInputs,
        } = appProps
        const songSelectorProps: SongSelectorProps = {
            entities,
            handleSongChangeEvent,
        }
        const configSelectorProps: ConfigSelectorProps = {
            displayedConfig,
            entities,
            handleConfigBlurEvent,
            handleConfigChangeEvent,
            handleConfigSubmitEvent,
            invalidConfigInputs,
            song: song || emptySong,
            submittedConfig,
            unsubmittedConfigInputs,
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
