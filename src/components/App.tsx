import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '../ui/state'
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
                        {song.description}
                    </div>
                    <ConfigSelector/>
                </div>}
            </div>
        )

export default connect(mapStateToProps)(App)
