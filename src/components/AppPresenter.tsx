import * as React from 'react'
import CustomConfigSelector from './CustomConfigSelector'
import SongSelector from './SongSelector'
import StandardConfigSelector from './StandardConfigSelector'
import { AppProps } from './types'

const AppPresenter: (appProps: AppProps) => JSX.Element =
    (appProps: AppProps): JSX.Element => {
        const {
            customConfig,
            entities,
            songName,
            handleCustomConfigChangeEvent,
            handleStandardConfigChangeEvent,
            handleSongChangeEvent,
            standardConfig,
        } = appProps

        return (
            <div>
                <SongSelector {...{handleSongChangeEvent, entities}}/>
                <StandardConfigSelector {...{standardConfig, entities, handleStandardConfigChangeEvent, songName}}/>
                <CustomConfigSelector {...{customConfig, entities, handleCustomConfigChangeEvent, songName}}/>
            </div>
        )
    }

export default AppPresenter
