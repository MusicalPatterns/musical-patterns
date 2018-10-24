import { Note, Notes } from '../types'
import { Frequency, Scalar, Time } from '../utilities/nominalTypes'
import * as to from '../utilities/to'
import { compileNoteProperty } from './compileNoteProperty'
import { CompileNotesOptions, NotePropertySpec, NoteSpec, NoteSpecs } from './types'

const defaultNotePropertySpec: NotePropertySpec = {
    index: to.Index(0),
    scalar: to.Scalar(1),
    scaleIndex: to.Index(0),
}

const compileNotes: (noteSpecs: NoteSpecs, compileNotesOptions: CompileNotesOptions) => Notes =
    (noteSpecs: NoteSpecs, { scales }: CompileNotesOptions): Notes =>
        noteSpecs.map((noteSpec: NoteSpec): Note => {
            const {
                durationSpec = defaultNotePropertySpec,
                gainSpec = defaultNotePropertySpec,
                pitchSpec = defaultNotePropertySpec,
                sustainSpec = defaultNotePropertySpec,
            } = noteSpec

            const duration: Time = compileNoteProperty(durationSpec, { scales }) as Time
            const gain: Scalar = compileNoteProperty(gainSpec, { scales }) as Scalar
            const frequency: Frequency = compileNoteProperty(pitchSpec, { scales }) as Frequency
            const sustain: Time = compileNoteProperty(sustainSpec, { scales }) as Time

            return { duration, gain, frequency, sustain }
        })

export {
    compileNotes,
}
