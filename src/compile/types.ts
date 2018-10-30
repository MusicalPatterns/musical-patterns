import { SongMaterial, SongSpec } from '../../songs'
import { Frequency, Index, Offset, Scalar, Time } from '../nominal'
import { OscillatorName, SampleName } from '../perform'
import { Scale, VoiceType } from '../types'
import { DictionaryOf } from '../utilities'

interface VoiceSpec {
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

// tslint:disable-next-line:no-any
type BuildEntitiesFunction = (songSpec?: any) => Entity[]
// tslint:disable-next-line:no-any
type BuildScalesFunction = (songSpec?: any) => Scale[]

interface CompileSongParameters {
    songMaterial: SongMaterial,
    songSpec: SongSpec,
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

type NoteProperty = Time | Scalar | Frequency

interface CompileNotesOptions {
    scales: Scale[],
}

type EntityDictionary = DictionaryOf<Entity>

type PartDictionary = DictionaryOf<Part>

interface CompileOscillatorVoiceParameters {
    timbre: OscillatorType,
}

interface CompileSampleVoiceParameters {
    timbre: SampleName,
}

export {
    Entity,
    TimeType,
    CompileSongParameters,
    CompileThreadParameters,
    CompileThreadsParameters,
    BuildEntitiesFunction,
    BuildScalesFunction,
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
