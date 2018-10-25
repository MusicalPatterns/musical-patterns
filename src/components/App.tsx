import * as React from 'react'
import { connect } from 'react-redux'
import { SongID } from '../songIds'
import { songs } from '../songs'
import { Song, SongMetadata } from '../songTypes'
import { ImmutableRootState } from '../state/rootState'
import SongSelector from './SongSelect'
import SongSpecInputs from './SongSpecInputs'
import { AppProps } from './types'

const mapStateToProps: (state: ImmutableRootState) => AppProps =
    (state: ImmutableRootState): AppProps => ({
        songId: state.get('songId'),
    })

const songDescription: (songId: SongID) => string =
    (songId: SongID): string => {
        const song: Song = songs[songId]
        const songMetadata: SongMetadata = song.metadata

        return songMetadata.description
    }

const App: (appProps: AppProps) => JSX.Element =
    ({ songId }: AppProps): JSX.Element =>

        (
            <div>
                <h1>Fun Musical Ideas</h1>
                <SongSelector/>

                {songId && <div>
                    <div>{songDescription(songId)}</div>
                    <SongSpecInputs {...{ songId }}/>
                </div>}
            </div>
        )

export default connect(mapStateToProps)(App)
