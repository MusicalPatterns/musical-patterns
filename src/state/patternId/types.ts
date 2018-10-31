import { PatternId } from '../../../patterns'

enum PatternIdActionType {
    SET_SONG_ID = 'SET_SONG_ID',
}

interface SetPatternId {
    data: PatternId,
    type: PatternIdActionType.SET_SONG_ID,
}

type PatternIdAction =
    SetPatternId

export {
    PatternIdAction,
    PatternIdActionType,
}
