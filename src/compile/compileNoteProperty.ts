import { Scale } from '../types'
import applyOffset from '../utilities/applyOffset'
import applyScale from '../utilities/applyScale'
import * as from from '../utilities/from'
import * as to from '../utilities/to'
import { CompileNotePropertyOptions, NoteProperty, NotePropertySpec } from './types'

const compileNoteProperty: (notePropertySpec: NotePropertySpec, options: CompileNotePropertyOptions) => NoteProperty =
    (notePropertySpec: NotePropertySpec, { scales }: CompileNotePropertyOptions): NoteProperty => {
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

        const scaleElement: NoteProperty | undefined = scalars[ from.Index(index) ]
        let result: NoteProperty = scaleElement || to.Scalar(1)

        result = applyScale(result, noteScalar)
        result = applyScale(result, scaleScalar)

        result = applyOffset(result, noteOffset)
        result = applyOffset(result, scaleOffset)

        return result as NoteProperty
    }

export {
    compileNoteProperty,
}
