import { Frequency, Scalar, Time, to } from '../nominal'
import { Note } from '../types'
import { compileNoteProperty } from './compileNoteProperty'
import { CompileNotesOptions, NotePropertySpec, NoteSpec, Part } from './types'

const defaultNotePropertySpec: NotePropertySpec = {
    index: to.Index(0),
    scalar: to.Scalar(1),
    scaleIndex: to.Index(0),
}

const compileNotes: (part: Part, compileNotesOptions: CompileNotesOptions) => Note[] =
    (part: Part, { scales }: CompileNotesOptions): Note[] =>
        part.map((noteSpec: NoteSpec): Note => {
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
