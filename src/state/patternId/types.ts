import { PatternId } from '../../../patterns'

enum PatternIdActionType {
    SET_PATTERN_ID = 'SET_PATTERN_ID',
}

interface SetPatternId {
    data: PatternId,
    type: PatternIdActionType.SET_PATTERN_ID,
}

type PatternIdAction =
    SetPatternId

export {
    PatternIdAction,
    PatternIdActionType,
}
