import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { songs } from '../song'
import { Song, SongID } from '../songTypes'
import { State } from '../state/state'
import { handleSongChange } from '../ui/handleSongChange'
import { HandleSongChangeEventParameters } from '../ui/types'
import { SongSelectorProps, SongSelectorPropsFromDispatch, SongSelectorPropsFromState } from './types'

const mapStateToProps: (state: State) => SongSelectorPropsFromState =
    (state: State): SongSelectorPropsFromState => ({
        entities: state.get('entities'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => SongSelectorPropsFromDispatch =
    (dispatch: Dispatch): SongSelectorPropsFromDispatch => ({
        handleSongChangeEvent: async ({ event, entities }: HandleSongChangeEventParameters): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const songId: SongID = target.value as SongID

            await handleSongChange({ dispatch, songId, entities })
        },
    })

const SongSelector: (songSelectorProps: SongSelectorProps) => JSX.Element =
    ({ handleSongChangeEvent, entities }: SongSelectorProps): JSX.Element => {
        const options: JSX.Element[] = Object.values(songs).map((song: Song, key: number): JSX.Element =>
            <option {...{ key, value: song.id }}>{song.formattedName}</option>)
        options.unshift(<option key='-1' value='' hidden disabled>please select a song</option>)

        const onChange: (event: React.SyntheticEvent<HTMLSelectElement>) => void =
            (event: React.SyntheticEvent<HTMLSelectElement>): void => {
                handleSongChangeEvent({ event, entities })
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
