import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { songMetadata } from '../songs'
import { SongID, SongMetadata } from '../songTypes'
import { State } from '../state/state'
import { handleSongChange } from '../ui/handleSongChange'
import { HandleSongChangeEventParameters } from '../ui/types'
import { SongSelectorProps, SongSelectorPropsFromDispatch, SongSelectorPropsFromState } from './types'

const mapStateToProps: (state: State) => SongSelectorPropsFromState =
    (state: State): SongSelectorPropsFromState => ({
        song: state
            .get('song'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => SongSelectorPropsFromDispatch =
    (dispatch: Dispatch): SongSelectorPropsFromDispatch => ({
        handleSongChangeEvent: async ({ event, song }: HandleSongChangeEventParameters): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const newlySelectedSongId: SongID = target.value as SongID

            await handleSongChange({ dispatch, newlySelectedSongId, currentSong: song })
        },
    })

const SongSelector: (songSelectorProps: SongSelectorProps) => JSX.Element =
    ({ handleSongChangeEvent, song }: SongSelectorProps): JSX.Element => {
        const options: JSX.Element[] = Object
            .values(songMetadata)
            .map((songMetadataEntry: SongMetadata, key: number): JSX.Element =>
                <option {...{ key, value: songMetadataEntry.songId }}>{songMetadataEntry.formattedName}</option>)
        options
            .unshift(<option key='-1' value='' hidden disabled>please select a song</option>)

        const onChange: (event: React.SyntheticEvent<HTMLSelectElement>) => void =
            (event: React.SyntheticEvent<HTMLSelectElement>): void => {
                handleSongChangeEvent({ event, song })
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

export default connect(mapStateToProps, mapDispatchToProps)(SongSelector)
