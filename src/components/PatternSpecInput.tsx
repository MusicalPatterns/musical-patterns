import * as React from 'react'
import { buildPatternSpecEventAttacher, PatternSpecEventAttacher, PatternSpecEventParameters } from '../patternSpec'
import { PatternSpecState } from '../state'
import { unCamelCase } from '../utilities'
import { PatternSpecInputProps } from './types'

const PatternSpecInput: (patternSpecInputProps: PatternSpecInputProps) => JSX.Element =
    (patternSpecInputProps: PatternSpecInputProps): JSX.Element => {
        const { patternSpecKey, patternSpecInputsProps } = patternSpecInputProps
        const {
            handlePatternSpecChange,
            handlePatternSpecKeyboardSubmit,
            handlePatternSpecButtonSubmit,
            handlePatternSpecBlur,
            patternSpecState,
        } = patternSpecInputsProps

        const {
            displayedPatternSpec,
            invalidPatternSpecInputs,
            disabledPatternSpecButtons,
            unsubmittedPatternSpecInputs,
            submittedPatternSpec,
        }: PatternSpecState = patternSpecState.toJS()

        const patternSpecValue: string = displayedPatternSpec[ patternSpecKey ]
        const invalid: boolean = invalidPatternSpecInputs[ patternSpecKey ]
        const unsubmitted: boolean = unsubmittedPatternSpecInputs[ patternSpecKey ]
        const disabled: boolean = disabledPatternSpecButtons[ patternSpecKey ]
        const submittedPatternSpecValue: string = submittedPatternSpec[ patternSpecKey ]

        const patternSpecEventParameters: PatternSpecEventParameters = { patternSpecKey, patternSpecState }

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

        const className: string = invalid ? 'invalid' : unsubmitted ? 'unsubmitted' : 'submitted'

        return (
            <div>
                <span>{unCamelCase(patternSpecKey)}</span>
                <input {...{ onChange, onKeyPress, value: patternSpecValue, className, onBlur, id: patternSpecKey }}/>
                <button {...{ onClick, disabled, value: patternSpecValue, id: patternSpecKey }}>submit</button>
                <span {...{ className: 'secret-submitted', id: patternSpecKey }}>{submittedPatternSpecValue}</span>
            </div>
        )
    }

export default PatternSpecInput
