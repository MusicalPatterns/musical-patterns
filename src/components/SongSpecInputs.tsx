import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { State, UI } from '../state/state'
import { handleSongSpecBlur } from '../ui/handleSongSpecBlur'
import { handleSongSpecChange } from '../ui/handleSongSpecChange'
import { handleSongSpecSubmit } from '../ui/handleSongSpecSubmit'
import {
    HandleSongSpecBlurEventParameters,
    HandleSongSpecChangeEventParameters,
    HandleSongSpecSubmitEventParameters,
} from '../ui/types'
import SongSpecInput from './SongSpecInput'
import {
    SongSpecInputProps,
    SongSpecInputsProps,
    SongSpecInputsPropsFromDispatch,
    SongSpecInputsPropsFromState,
} from './types'

const SUBMIT: string = 'Enter'

const mapStateToProps: (state: State) => SongSpecInputsPropsFromState =
    (state: State): SongSpecInputsPropsFromState =>
        ({
            threads: state.get('threads'),
            ui: state.get('ui'),
        })

const mapDispatchToProps: (dispatch: Dispatch) => SongSpecInputsPropsFromDispatch =
    (dispatch: Dispatch): SongSpecInputsPropsFromDispatch => ({
        handleSongSpecBlurEvent: async (parameters: HandleSongSpecBlurEventParameters): Promise<void> => {
            const { event, ...otherParameters } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const songSpecValue: string = target.value

            handleSongSpecBlur({ songSpecValue, dispatch, ...otherParameters })
        },
        handleSongSpecChangeEvent: (parameters: HandleSongSpecChangeEventParameters): void => {
            const { event, ...otherParameters } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const songSpecValue: string = target.value

            handleSongSpecChange({ dispatch, songSpecValue, ...otherParameters })
        },
        handleSongSpecSubmitEvent: async (parameters: HandleSongSpecSubmitEventParameters): Promise<void> => {
            const { event, ...otherParameters } = parameters

            if (event.key !== SUBMIT) {
                return
            }
            const target: HTMLInputElement = event.target as HTMLInputElement
            const songSpecValue: string = target.value

            await handleSongSpecSubmit({ ...otherParameters, songSpecValue, dispatch })
        },
    })

const SongSpecInputs: (songSpecInputsProps: SongSpecInputsProps) => JSX.Element =
    (songSpecInputsProps: SongSpecInputsProps): JSX.Element => {
        const { ui }: SongSpecInputsProps = songSpecInputsProps
        const { displayedSongSpec, invalidSongSpecInputs, unsubmittedSongSpecInputs }: UI = ui
        const songSpecInputs: JSX.Element[] = Object.keys(displayedSongSpec).sort().map(
            (songSpecKey: string, key: number): JSX.Element => {
                const songSpecValue: string = displayedSongSpec[ songSpecKey ]
                const invalid: boolean = invalidSongSpecInputs[ songSpecKey ]
                const unsubmitted: boolean = unsubmittedSongSpecInputs[ songSpecKey ]
                const songSpecInputProps: SongSpecInputProps = {
                    invalid,
                    songSpecInputsProps,
                    songSpecKey,
                    songSpecValue,
                    unsubmitted,
                }

                return <SongSpecInput {...{ ...songSpecInputProps, key }} />
            },
        )

        return (
            <div>
                <h3>song spec</h3>
                {songSpecInputs}
            </div>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(SongSpecInputs)
