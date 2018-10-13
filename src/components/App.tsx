import * as React from 'react'
import { connect } from 'react-redux'
import { songMetadata } from '../songs'
import { State } from '../state/state'
import ConfigSelector from './ConfigSelector'
import SongSelector from './SongSelector'
import { AppProps } from './types'

const mapStateToProps: (state: State) => AppProps =
    (state: State): AppProps => ({
        song: state.get('song'),
    })

const App: (appProps: AppProps) => JSX.Element =
    ({ song }: AppProps): JSX.Element =>
        (
            <div>
                <h1>Fun Musical Ideas</h1>
                <SongSelector/>

                {song && <div>
                    <div>
                        {songMetadata[song.songId].description}
                    </div>
                    <ConfigSelector {...{ song }}/>
                </div>}
            </div>
        )

export default connect(mapStateToProps)(App)
