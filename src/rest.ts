import {
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    SILENT,
} from './constants'
import { Note } from './types'

const rest: (_: number) => Note[] =
    (duration: number): Note[] =>
        [{
            duration,
            gain: SILENT,
            pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
            sustain: duration - SEPARATION_FOR_NEIGHBORING_NOTES,
        }]

export default rest
