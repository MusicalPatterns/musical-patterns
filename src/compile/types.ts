import { OscillatorName, SampleName, SpatializationType, VoiceType } from '@musical-patterns/performer'
import { Coordinate, CoordinateElement, Frequency, Index, Offset, Scalar, Time } from '../nominal'
import { DictionaryOf } from '../utilities'

interface VoiceSpec {
    spatialization?: SpatializationType,
    timbre: SampleName | OscillatorName,
    voiceType: VoiceType,
}

interface Entity {
    part?: Part,
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

type Part = NoteSpec[]

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

type EntityDictionary = DictionaryOf<Entity>

type PartDictionary = DictionaryOf<Part>

export {
    Entity,
    CompileThreadParameters,
    CompileThreadsParameters,
    VoiceSpec,
    NoteSpec,
    NotePropertySpec,
    NoteProperty,
    CompileNotesOptions,
    EntityDictionary,
    PartDictionary,
    Adjustable,
    Part,
    Scale,
}
