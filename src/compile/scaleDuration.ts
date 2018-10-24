import { Note } from '../types'
import applyScale from '../utilities/applyScale'
import { Scalar } from '../utilities/nominalTypes'

const scaleDuration: (note: Note, durationScalar: Scalar) => Note =
    (note: Note, durationScalar: Scalar): Note => ({
        ...note,
        duration: applyScale(note.duration, durationScalar),
        sustain: applyScale(note.sustain, durationScalar),
    })

export default scaleDuration
