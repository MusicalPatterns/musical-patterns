import { Note } from './types'
import * as to from './utilities/to'

const defaultNote: Note = {
    duration: to.Time(1),
    gain: to.Scalar(1),
    pitchIndex: to.Index(0),
    pitchScalar: to.Scalar(1),
    scaleIndex: to.Index(0),
    sustain: to.Time(1),
}

export {
    defaultNote,
}
