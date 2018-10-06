import * as React from 'react'
import CustomConfigSelector from './CustomConfigSelector'
import SongSelector from './SongSelector'
import StandardConfigSelector from './StandardConfigSelector'
import { AppProps, CustomConfigSelectorProps, SongSelectorProps, StandardConfigSelectorProps } from './types'

const AppPresenter: (appProps: AppProps) => JSX.Element =
    (appProps: AppProps): JSX.Element => {
        const {
            entities,
            handleConfigSubmitEvent,
            handleCustomConfigChangeEvent,
            handleStandardConfigChangeEvent,
            handleSongChangeEvent,
            song,
        } = appProps
        const songSelectorProps: SongSelectorProps = {
            entities,
            handleSongChangeEvent,
        }
        const standardConfigSelectorProps: StandardConfigSelectorProps = {
            entities,
            handleConfigSubmitEvent,
            handleStandardConfigChangeEvent,
            song,
        }
        const customConfigSelectorProps: CustomConfigSelectorProps = {
            entities,
            handleConfigSubmitEvent,
            handleCustomConfigChangeEvent,
            song,
        }

        return (
            <div>
                <SongSelector {...songSelectorProps}/>
                <StandardConfigSelector {...standardConfigSelectorProps}/>
                <CustomConfigSelector {...customConfigSelectorProps}/>
            </div>
        )
    }

export default AppPresenter
