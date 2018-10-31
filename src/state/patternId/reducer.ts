import { PatternId } from '../../../songs'
import { Maybe } from '../../utilities'
import { initialPatternId } from './state'
import { PatternIdAction, PatternIdActionType } from './types'

const patternIdReducer: (patternId: Maybe<PatternId>, action: PatternIdAction) => Maybe<PatternId> =
    (patternId: Maybe<PatternId> = initialPatternId, action: PatternIdAction): Maybe<PatternId> => {
        switch (action.type) {
            case PatternIdActionType.SET_SONG_ID: {
                return action.data
            }

            default: {
                return patternId
            }
        }
    }

export {
    patternIdReducer,
}
