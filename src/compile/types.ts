import { Coordinate, CoordinateElement, Frequency, Index, Offset, Scalar, Time } from '../nominal'
import { OscillatorName, SampleName } from '../performance'
import { Scale, SpatializationType, VoiceType } from '../types'
import { DictionaryOf } from '../utilities'

interface VoiceSpec {
    spatialization?: SpatializationType,
    timbre: SampleName | OscillatorName,
    voiceType: VoiceType,
}

enum TimeType {
    RAW = 'raw',
    ATOMIC = 'atomic',
}

interface Entity {
    part?: Part,
    timeType?: TimeType,
    voiceSpec?: VoiceSpec,
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

interface CompileOscillatorVoiceParameters {
    spatialization?: SpatializationType,
    timbre: OscillatorType,
}

interface CompileSampleVoiceParameters {
    spatialization?: SpatializationType,
    timbre: SampleName,
}

export {
    Entity,
    TimeType,
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
    CompileOscillatorVoiceParameters,
    CompileSampleVoiceParameters,
    Part,
}
