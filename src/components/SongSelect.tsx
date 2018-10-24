import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { SongID } from '../songIds'
import { songs } from '../songs'
import { Song } from '../songTypes'
import { State } from '../state/state'
import { handleSongChange } from '../ui/handleSongChange'
import { songsFilter } from '../ui/songsFilter'
import { HandleSongChangeEventParameters } from '../ui/types'
import { SongSelectProps, SongSelectPropsFromDispatch, SongSelectPropsFromState } from './types'

const mapStateToProps: (state: State) => SongSelectPropsFromState =
    (state: State): SongSelectPropsFromState => ({
        threads: state.get('threads'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => SongSelectPropsFromDispatch =
    (dispatch: Dispatch): SongSelectPropsFromDispatch => ({
        handleSongChangeEvent: async ({ event, threads }: HandleSongChangeEventParameters): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songId: SongID = target.value as SongID

            await handleSongChange({ dispatch, songId, threads })
        },
    })

const SongSelect: (songSelectorProps: SongSelectProps) => JSX.Element =
    ({ handleSongChangeEvent, threads }: SongSelectProps): JSX.Element => {
        const options: JSX.Element[] = Object
            .entries(songsFilter(songs))
            .map(([ songId, song ]: [string, Song], key: number): JSX.Element =>
                <option {...{ key, value: songId }}>{song.metadata.formattedName}</option>)
        options
            .unshift(<option key='-1' value='' hidden disabled>please select a song</option>)

        const onChange: (event: React.SyntheticEvent<HTMLSelectElement>) => void =
            (event: React.SyntheticEvent<HTMLSelectElement>): void => {
                handleSongChangeEvent({ event, threads })
            }

        return (
            <div>
                <h3>song selection</h3>
                <select {...{ onChange, defaultValue: '' }}>
                    {options}
                </select>
            </div>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(SongSelect)
