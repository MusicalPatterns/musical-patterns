import * as React from 'react'
import { songs } from '../song'
import { Song } from '../songTypes'
import { SongSelectorProps } from './types'

const SongSelector: (songSelectorProps: SongSelectorProps) => JSX.Element =
    ({ handleSongChangeEvent, entities, song: currentSong }: SongSelectorProps): JSX.Element => {
        const options: JSX.Element[] = Object.values(songs).map((song: Song, key: number): JSX.Element =>
            <option {...{ key, value: song.name }}>{song.formattedName}</option>)

        const onChange: (event: React.SyntheticEvent<HTMLSelectElement>) => void =
            (event: React.SyntheticEvent<HTMLSelectElement>): void => {
                handleSongChangeEvent(event, entities)
            }

        return (
            <div>
                <h3>song selection</h3>
                <select {...{ onChange }}>
                    {options}
                </select>
                <div>
                    {currentSong.description}
                </div>
            </div>
        )
    }

export default SongSelector
