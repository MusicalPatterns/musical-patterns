import { from, to } from '../nominal'
import { Scale } from '../types'
import { applyOffset, applyScale, Maybe } from '../utilities'
import { CompileNotesOptions, NoteProperty, NotePropertySpec } from './types'

const compileNoteProperty: (notePropertySpec: NotePropertySpec, options: CompileNotesOptions) => NoteProperty =
    (notePropertySpec: NotePropertySpec, { scales }: CompileNotesOptions): NoteProperty => {
        const {
            index = to.Index(0),
            offset: noteOffset = to.Offset(0),
            scalar: noteScalar = to.Scalar(1),
            scaleIndex = to.Index(0),
        }: NotePropertySpec = notePropertySpec

        const scale: Scale = scales[ from.Index(scaleIndex) ]
        const {
            offset: scaleOffset = to.Offset(0),
            scalar: scaleScalar = to.Scalar(1),
            scalars = [],
        }: Scale = scale

        const scaleElement: Maybe<NoteProperty> = scalars[ from.Index(index) ]
        let noteProperty: NoteProperty = scaleElement || to.Scalar(1)

        noteProperty = applyScale(noteProperty, noteScalar)
        noteProperty = applyScale(noteProperty, scaleScalar)

        noteProperty = applyOffset(noteProperty, noteOffset)
        noteProperty = applyOffset(noteProperty, scaleOffset)

        return noteProperty as NoteProperty
    }

export {
    compileNoteProperty,
}
