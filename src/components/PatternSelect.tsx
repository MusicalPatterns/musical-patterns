import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Pattern, PatternId, patterns } from '../../songs'
import { ImmutableRootState, RootStateKeys } from '../state'
import { handlePatternChange, HandlePatternChangeEventParameters, PartialPatterns, patternsFilter } from '../ui'
import { PatternSelectProps, PatternSelectPropsFromDispatch, PatternSelectPropsFromState } from './types'

const mapStateToProps: (state: ImmutableRootState) => PatternSelectPropsFromState =
    (state: ImmutableRootState): PatternSelectPropsFromState => ({
        threads: state.get(RootStateKeys.THREADS),
    })

const mapDispatchToProps: (dispatch: Dispatch) => PatternSelectPropsFromDispatch =
    (dispatch: Dispatch): PatternSelectPropsFromDispatch => ({
        handlePatternChangeEvent: async ({ event, threads }: HandlePatternChangeEventParameters): Promise<void> => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            const patternId: PatternId = target.value as PatternId

            await handlePatternChange({ dispatch, patternId, threads })
        },
    })

const PatternSelect: (patternSelectorProps: PatternSelectProps) => JSX.Element =
    ({ handlePatternChangeEvent, threads }: PatternSelectProps): JSX.Element => {
        const filteredPatterns: PartialPatterns = patternsFilter(patterns)
        const options: JSX.Element[] = Object.entries(filteredPatterns)
            .map(([ patternId, pattern ]: [ string, Pattern ], key: number): JSX.Element =>
                <option {...{ key, value: patternId }}>{pattern.metadata.formattedName}</option>,
            )

        options
            .unshift(<option key='-1' value='' hidden disabled>please select a pattern</option>)

        const onChange: (event: React.SyntheticEvent<HTMLSelectElement>) => void =
            (event: React.SyntheticEvent<HTMLSelectElement>): void => {
                handlePatternChangeEvent({ event, threads })
            }

        return (
            <div>
                <h3>pattern selection</h3>
                <select {...{ onChange, defaultValue: '' }}>
                    {options}
                </select>
            </div>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(PatternSelect)
