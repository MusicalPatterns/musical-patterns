import {
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    SILENT,
} from './constants'
import { Note } from './types'
import * as from from './utilities/from'
import { Time } from './utilities/nominalTypes'
import * as to from './utilities/to'

const rest: (duration: Time) => Note[] =
    (duration: Time): Note[] =>
        [{
            duration,
            gain: SILENT,
            pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
            scaleIndex: to.Index(0),
            sustain: to.Time(from.Time(duration) - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES)),
        }]

export default rest
