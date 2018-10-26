import { Scalar } from '../nominal'
import { Note } from '../types'
import { applyScale } from '../utilities'

const scaleDuration: (note: Note, durationScalar: Scalar) => Note =
    (note: Note, durationScalar: Scalar): Note => ({
        ...note,
        duration: applyScale(note.duration, durationScalar),
        sustain: applyScale(note.sustain, durationScalar),
    })

export {
    scaleDuration,
}
