import * as React from 'react'
import { connect } from 'react-redux'
import { Song, SongId, SongMetadata, songs } from '../../songs'
import { ImmutableRootState, RootStateKeys } from '../state'
import SongSelector from './SongSelect'
import SongSpecInputs from './SongSpecInputs'
import { AppProps } from './types'

const mapStateToProps: (state: ImmutableRootState) => AppProps =
    (state: ImmutableRootState): AppProps => ({
        songId: state.get(RootStateKeys.SONG_ID),
    })

const songDescription: (songId: SongId) => string =
    (songId: SongId): string => {
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
