import * as React from 'react'
import { Ui } from '../state'
import { SongSpecInputProps } from './types'

const SongSpecInput: (songSpecInputProps: SongSpecInputProps) => JSX.Element =
    (songSpecInputProps: SongSpecInputProps): JSX.Element => {
        const { songSpecKey, songSpecInputsProps } = songSpecInputProps
        const {
            songId,
            handleSongSpecChangeEvent,
            handleSongSpecSubmitEvent,
            handleSongSpecBlurEvent,
            threads,
            ui,
        } = songSpecInputsProps

        const { displayedSongSpec, invalidSongSpecInputs, unsubmittedSongSpecInputs }: Ui = ui.toJS()

        const songSpecValue: string = displayedSongSpec[ songSpecKey ]
        const invalid: boolean = invalidSongSpecInputs[ songSpecKey ]
        const unsubmitted: boolean = unsubmittedSongSpecInputs[ songSpecKey ]

        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleSongSpecChangeEvent({ songSpecKey, event, ui })
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handleSongSpecSubmitEvent({ songSpecKey, event, songId, threads, ui })
            }
        const onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handleSongSpecBlurEvent({ songSpecKey, event, ui })
            }

        const className: string = invalid ? 'invalid' : unsubmitted ? 'unsubmitted' : ''

        return (
            <div>
                {songSpecKey}
                <input {...{ onChange, onKeyPress, value: songSpecValue, className, onBlur }}/>
            </div>
        )
    }

export default SongSpecInput
