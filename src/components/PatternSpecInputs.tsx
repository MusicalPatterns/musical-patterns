import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ImmutableRootState, RootStateKeys, StringifiedPatternSpec, UiStateKeys } from '../state'
import {
    handlePatternSpecBlur,
    HandlePatternSpecBlurEventParameters,
    handlePatternSpecChange,
    HandlePatternSpecChangeEventParameters,
    handlePatternSpecSubmit,
    HandlePatternSpecSubmitEventParameters,
} from '../ui'
import PatternSpecInput from './PatternSpecInput'
import {
    PatternSpecInputProps,
    PatternSpecInputsProps,
    PatternSpecInputsPropsFromDispatch,
    PatternSpecInputsPropsFromState,
} from './types'

const SUBMIT: string = 'Enter'

const mapStateToProps: (state: ImmutableRootState) => PatternSpecInputsPropsFromState =
    (state: ImmutableRootState): PatternSpecInputsPropsFromState =>
        ({
            threads: state.get(RootStateKeys.THREADS),
            ui: state.get(RootStateKeys.UI),
        })

const mapDispatchToProps: (dispatch: Dispatch) => PatternSpecInputsPropsFromDispatch =
    (dispatch: Dispatch): PatternSpecInputsPropsFromDispatch => ({
        handlePatternSpecBlurEvent: async (parameters: HandlePatternSpecBlurEventParameters): Promise<void> => {
            const { event, ...otherParameters } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const patternSpecValue: string = target.value

            handlePatternSpecBlur({ patternSpecValue, dispatch, ...otherParameters })
        },
        handlePatternSpecChangeEvent: (parameters: HandlePatternSpecChangeEventParameters): void => {
            const { event, ...otherParameters } = parameters
            const target: HTMLInputElement = event.target as HTMLInputElement
            const patternSpecValue: string = target.value

            handlePatternSpecChange({ dispatch, patternSpecValue, ...otherParameters })
        },
        handlePatternSpecSubmitEvent: async (parameters: HandlePatternSpecSubmitEventParameters): Promise<void> => {
            const { event, ...otherParameters } = parameters

            if (event.key !== SUBMIT) {
                return
            }
            const target: HTMLInputElement = event.target as HTMLInputElement
            const patternSpecValue: string = target.value

            await handlePatternSpecSubmit({ ...otherParameters, patternSpecValue, dispatch })
        },
    })

const PatternSpecInputs: (patternSpecInputsProps: PatternSpecInputsProps) => JSX.Element =
    (patternSpecInputsProps: PatternSpecInputsProps): JSX.Element => {
        const { ui }: PatternSpecInputsProps = patternSpecInputsProps
        const displayedPatternSpec: StringifiedPatternSpec = ui
            .get(UiStateKeys.DISPLAYED_SONG_SPEC)
        const patternSpecInputs: JSX.Element[] = Object.keys(displayedPatternSpec)
            .sort()
            .map(
                (patternSpecKey: string, key: number): JSX.Element => {
                    const patternSpecInputProps: PatternSpecInputProps = { patternSpecInputsProps, patternSpecKey }

                    return <PatternSpecInput {...{ ...patternSpecInputProps, key }} />
                },
            )

        return (
            <div>
                <h3>pattern spec</h3>
                {patternSpecInputs}
            </div>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(PatternSpecInputs)
