import { VoiceSpec } from '@musical-patterns/performer'
import { Coordinate, CoordinateElement, Frequency, Index, Offset, Scalar, Time } from '@musical-patterns/utilities'

interface Entity {
    partSpec?: PartSpec,
    voiceSpec?: VoiceSpec,
}

interface Scale extends Adjustable {
    scalars: Scalar[],
}

interface CompileThreadParameters {
    entity: Entity,
    scales: Scale[]
}

interface CompileThreadsParameters {
    entities: Entity[],
    scales: Scale[]
}

interface NoteSpec {
    durationSpec?: NotePropertySpec,
    gainSpec?: NotePropertySpec,
    pitchSpec?: NotePropertySpec,
    positionSpec?: NotePropertySpec | NotePropertySpec[],
    sustainSpec?: NotePropertySpec,
}

type PartSpec = NoteSpec[]

interface Adjustable {
    offset?: Offset,
    scalar?: Scalar,
}

interface NotePropertySpec extends Adjustable {
    index?: Index,
    scaleIndex?: Index,
}

type NoteProperty = Time |
    Scalar |
    Frequency |
    Coordinate |
    CoordinateElement

interface CompileNotesOptions {
    scales: Scale[],
}

export {
    Entity,
    CompileThreadParameters,
    CompileThreadsParameters,
    VoiceSpec,
    NoteSpec,
    NotePropertySpec,
    NoteProperty,
    CompileNotesOptions,
    Adjustable,
    PartSpec,
    Scale,
}
