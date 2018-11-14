import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Pattern, PatternId, patterns } from '../../patterns'
import {
    handlePatternChange,
    PartialPatterns,
    PatternChangeEventExtractorParameters,
    patternsFilter,
} from '../patternSpec'
import { PatternListProps } from './types'

const mapDispatchToProps: (dispatch: Dispatch) => PatternListProps =
    (dispatch: Dispatch): PatternListProps => ({
        handlePatternChangeEvent: async ({ event }: PatternChangeEventExtractorParameters): Promise<void> => {
            const target: HTMLLIElement = event.target as HTMLLIElement
            const patternId: PatternId = target.id as PatternId

            await handlePatternChange({ dispatch, patternId })
        },
    })

const PatternList: (PatternListProps: PatternListProps) => JSX.Element =
    ({ handlePatternChangeEvent }: PatternListProps): JSX.Element => {
        const filteredPatterns: PartialPatterns = patternsFilter(patterns)

        const onClick: (event: React.SyntheticEvent) => void =
            (event: React.SyntheticEvent): void => {
                handlePatternChangeEvent({ event })
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

// tslint:disable-next-line:no-any
export default connect(undefined, mapDispatchToProps)(PatternList as any)
