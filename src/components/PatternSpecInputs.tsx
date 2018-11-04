import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ImmutableRootState, RootStateKeys, StringifiedPatternSpec, UiStateKeys } from '../state'
import {
    buildPatternSpecEventExtractor,
    handlePatternSpecBlur,
    handlePatternSpecChange,
    handlePatternSpecSubmit,
} from '../ui'
import PatternSpecInput from './PatternSpecInput'
import {
    PatternSpecInputProps,
    PatternSpecInputsProps,
    PatternSpecInputsPropsFromDispatch,
    PatternSpecInputsPropsFromState,
} from './types'

const mapStateToProps: (state: ImmutableRootState) => PatternSpecInputsPropsFromState =
    (state: ImmutableRootState): PatternSpecInputsPropsFromState =>
        ({
            threads: state.get(RootStateKeys.THREADS),
            ui: state.get(RootStateKeys.UI),
        })

const mapDispatchToProps: (dispatch: Dispatch) => PatternSpecInputsPropsFromDispatch =
    (dispatch: Dispatch): PatternSpecInputsPropsFromDispatch => ({
        handlePatternSpecBlur: buildPatternSpecEventExtractor({
            dispatch,
            patternSpecEventHandler: handlePatternSpecBlur,
        }),
        handlePatternSpecButtonSubmit: buildPatternSpecEventExtractor({
            dispatch,
            patternSpecEventHandler: handlePatternSpecSubmit,
        }),
        handlePatternSpecChange: buildPatternSpecEventExtractor({
            dispatch,
            patternSpecEventHandler: handlePatternSpecChange,
        }),
        handlePatternSpecKeyboardSubmit: buildPatternSpecEventExtractor({
            abortIfNotSubmitting: true,
            dispatch,
            patternSpecEventHandler: handlePatternSpecSubmit,
        }),
    })

const PatternSpecInputs: (patternSpecInputsProps: PatternSpecInputsProps) => JSX.Element =
    (patternSpecInputsProps: PatternSpecInputsProps): JSX.Element => {
        const { ui }: PatternSpecInputsProps = patternSpecInputsProps
        const displayedPatternSpec: StringifiedPatternSpec = ui
            .get(UiStateKeys.DISPLAYED_PATTERN_SPEC)
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
