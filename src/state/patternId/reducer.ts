import { PatternId } from '../../../patterns'
import { Maybe } from '../../utilities'
import { initialPatternId } from './state'
import { PatternIdStateAction, PatternIdStateActionType } from './types'

const patternIdReducer: (patternIdState: Maybe<PatternId>, action: PatternIdStateAction) => Maybe<PatternId> =
    (patternIdState: Maybe<PatternId> = initialPatternId, action: PatternIdStateAction): Maybe<PatternId> => {
        switch (action.type) {
            case PatternIdStateActionType.SET_PATTERN_ID: {
                return action.data
            }

            default: {
                return patternIdState
            }
        }
    }

export {
    patternIdReducer,
}
