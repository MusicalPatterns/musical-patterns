import { Note } from '../types'
import { Scalar } from '../utilities/nominalTypes'
import scale from '../utilities/scale'

const scaleDuration: (note: Note, durationScalar: Scalar) => Note =
    (note: Note, durationScalar: Scalar): Note => ({
        ...note,
        duration: scale(note.duration, durationScalar),
        sustain: scale(note.sustain, durationScalar),
    })

export default scaleDuration
