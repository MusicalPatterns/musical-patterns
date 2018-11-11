import { compileNoteProperty, from, NotePropertySpec, NoteSpec, Part, Scale, Time, to } from '../../src/indexForTest'

const calculatePartCompiledDuration: (part: Part, scales: Scale[]) => Time =
    (part: Part, scales: Scale[]): Time =>
        part.reduce(
            (totalDuration: Time, noteSpec: NoteSpec): Time => {
                const durationSpec: NotePropertySpec = noteSpec.durationSpec || {}
                const duration: Time = compileNoteProperty(durationSpec, { scales }) as Time

                return to.Time(from.Time(totalDuration) + from.Time(duration))
            },
            to.Time(0),
        )

export {
    calculatePartCompiledDuration,
}
