// tslint:disable:no-reaching-imports

export {
    NotePropertySpec,
    NoteSpec,
    Entity,
    compileThread,
    compileNoteProperty,
    Part,
} from './compile/indexForTest'
export {
    buildStandardScales,
} from './scales'
export {
    applyOffset,
    applyScale,
    Maybe,
    centsToPitch,
    centsToShiftFromOneFrequencyToAnother,
    pitchToCents,
    deepEqual,
    repeat,
    repeatCall,
    applyCycle,
    DictionaryOf,
    sequence,
} from './utilities/indexForTest'
export {
    SumOfScalars,
    SumOfIndices,
    Scalar,
    Block,
    Power,
    Count,
    Index,
    to,
    Cents,
    Time,
    from,
    ContourPiece,
} from './nominal/indexForTest'
export {
    ActionType,
    PerformanceStateAction,
    immutablize,
    rootReducer,
    ImmutableRootState,
} from './state/indexForTest'
export {
    App,
} from './components/indexForTest'
export {
    calculateTotalContourDuration,
} from './contours'

export {
    Thread,
    Scale,
    Segment,
} from './types'
