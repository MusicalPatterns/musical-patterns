import * as React from 'react'
import ConfigSelector from './ConfigSelector'
import SongSelector from './SongSelector'
import { AppProps } from './types'

const AppPresenter: (props: AppProps) => JSX.Element =
    ({config, entities, songName, handleConfigChangeEvent, handleSongChangeEvent}: AppProps): JSX.Element => (
        <div>
            <SongSelector {...{handleSongChangeEvent, entities}}/>
            <ConfigSelector {...{config, entities, handleConfigChangeEvent, songName}}/>
        </div>
    )

export default AppPresenter
