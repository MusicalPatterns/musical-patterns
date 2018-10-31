import * as React from 'react'
import { Ui } from '../state'
import { PatternSpecInputProps } from './types'

const PatternSpecInput: (patternSpecInputProps: PatternSpecInputProps) => JSX.Element =
    (patternSpecInputProps: PatternSpecInputProps): JSX.Element => {
        const { patternSpecKey, patternSpecInputsProps } = patternSpecInputProps
        const {
            patternId,
            handlePatternSpecChangeEvent,
            handlePatternSpecSubmitEvent,
            handlePatternSpecBlurEvent,
            threads,
            ui,
        } = patternSpecInputsProps

        const { displayedPatternSpec, invalidPatternSpecInputs, unsubmittedPatternSpecInputs }: Ui = ui.toJS()

        const patternSpecValue: string = displayedPatternSpec[ patternSpecKey ]
        const invalid: boolean = invalidPatternSpecInputs[ patternSpecKey ]
        const unsubmitted: boolean = unsubmittedPatternSpecInputs[ patternSpecKey ]

        const onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handlePatternSpecChangeEvent({ patternSpecKey, event, ui })
            }
        const onKeyPress: (event: React.KeyboardEvent) => void =
            (event: React.KeyboardEvent): void => {
                handlePatternSpecSubmitEvent({ patternSpecKey, event, patternId, threads, ui })
            }
        const onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void =
            (event: React.SyntheticEvent<HTMLInputElement>): void => {
                handlePatternSpecBlurEvent({ patternSpecKey, event, ui })
            }

        const className: string = invalid ? 'invalid' : unsubmitted ? 'unsubmitted' : ''

        return (
            <div>
                {patternSpecKey}
                <input {...{ onChange, onKeyPress, value: patternSpecValue, className, onBlur }}/>
            </div>
        )
    }

export default PatternSpecInput
