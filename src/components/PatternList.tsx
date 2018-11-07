import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Pattern, PatternId, patterns } from '../../patterns'
import { ImmutableRootState, RootStateKeys } from '../state'
import { handlePatternChange, PartialPatterns, PatternChangeEventExtractorParameters, patternsFilter } from '../ui'
import { PatternListProps, PatternListPropsFromDispatch, PatternListPropsFromState } from './types'

const mapStateToProps: (state: ImmutableRootState) => PatternListPropsFromState =
    (state: ImmutableRootState): PatternListPropsFromState => ({
        threads: state.get(RootStateKeys.THREADS),
    })

const mapDispatchToProps: (dispatch: Dispatch) => PatternListPropsFromDispatch =
    (dispatch: Dispatch): PatternListPropsFromDispatch => ({
        handlePatternChangeEvent: async ({ event, threads }: PatternChangeEventExtractorParameters): Promise<void> => {
            const target: HTMLLIElement = event.target as HTMLLIElement
            const patternId: PatternId = target.id as PatternId

            await handlePatternChange({ dispatch, patternId, threads })
        },
    })

const PatternList: (PatternListProps: PatternListProps) => JSX.Element =
    ({ handlePatternChangeEvent, threads }: PatternListProps): JSX.Element => {
        const filteredPatterns: PartialPatterns = patternsFilter(patterns)

        const onClick: (event: React.SyntheticEvent) => void =
            (event: React.SyntheticEvent): void => {
                handlePatternChangeEvent({ event, threads })
            }

        const options: JSX.Element[] = Object.entries(filteredPatterns)
            .map(([ patternId, pattern ]: [ string, Pattern ], key: number): JSX.Element =>
                (
                    <li {...{ key, onClick, id: patternId }} >
                        {pattern.metadata.musicalIdeaIllustrated}
                    </li>
                ))

        options
            .unshift(<option key='-1' value='' hidden disabled>please select a pattern</option>)

        return (
            <div>
                <h3>pattern selection</h3>
                <ul>
                    {options}
                </ul>
            </div>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(PatternList)
