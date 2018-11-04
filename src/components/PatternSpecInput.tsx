import * as React from 'react'
import { Ui } from '../state'
import { buildPatternSpecEventAttacher, PatternSpecEventAttacher, PatternSpecEventParameters } from '../ui'
import { PatternSpecInputProps } from './types'

const PatternSpecInput: (patternSpecInputProps: PatternSpecInputProps) => JSX.Element =
    (patternSpecInputProps: PatternSpecInputProps): JSX.Element => {
        const { patternSpecKey, patternSpecInputsProps } = patternSpecInputProps
        const {
            patternId,
            handlePatternSpecChange,
            handlePatternSpecKeyboardSubmit,
            handlePatternSpecButtonSubmit,
            handlePatternSpecBlur,
            threads,
            ui,
        } = patternSpecInputsProps

        const {
            displayedPatternSpec,
            invalidPatternSpecInputs,
            disabledPatternSpecButtons,
            unsubmittedPatternSpecInputs,
        }: Ui = ui.toJS()

        const patternSpecValue: string = displayedPatternSpec[ patternSpecKey ]
        const invalid: boolean = invalidPatternSpecInputs[ patternSpecKey ]
        const unsubmitted: boolean = unsubmittedPatternSpecInputs[ patternSpecKey ]
        const disabled: boolean = disabledPatternSpecButtons[ patternSpecKey ]

        const patternSpecEventParameters: PatternSpecEventParameters = { patternSpecKey, ui, patternId, threads }

        const onChange: PatternSpecEventAttacher = buildPatternSpecEventAttacher({
            patternSpecEventExtractor: handlePatternSpecChange,
            patternSpecEventParameters,
        })
        const onKeyPress: PatternSpecEventAttacher = buildPatternSpecEventAttacher({
            patternSpecEventExtractor: handlePatternSpecKeyboardSubmit,
            patternSpecEventParameters,
        })
        const onClick: PatternSpecEventAttacher = buildPatternSpecEventAttacher({
            patternSpecEventExtractor: handlePatternSpecButtonSubmit,
            patternSpecEventParameters,
        })
        const onBlur: PatternSpecEventAttacher = buildPatternSpecEventAttacher({
            patternSpecEventExtractor: handlePatternSpecBlur,
            patternSpecEventParameters,
        })

        const className: string = invalid ? 'invalid' : unsubmitted ? 'unsubmitted' : ''

        return (
            <div>
                {patternSpecKey}
                <input {...{ onChange, onKeyPress, value: patternSpecValue, className, onBlur }}/>
                <button {...{ onClick, disabled, value: patternSpecValue }}>submit</button>
            </div>
        )
    }

export default PatternSpecInput
