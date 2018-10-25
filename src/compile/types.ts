import { SongSpec } from '../songs'
import { SongMaterial } from '../songTypes'
import { OscillatorName, SampleName, Scales, VoiceType } from '../types'
import { Frequency, Index, Offset, Scalar, Time } from '../utilities/nominalTypes'
import { DictionaryOf } from '../utilities/types'

interface VoiceSpec {
    timbre: SampleName | OscillatorName,
    voiceType: VoiceType,
}

enum TimeType {
    RAW = 'raw',
    ATOMIC = 'atomic',
}

interface Entity {
    noteSpecs?: NoteSpecs,
    timeType?: TimeType,
    voiceSpec?: VoiceSpec,
}

type Entities = Entity[]

// tslint:disable-next-line:no-any
type BuildEntitiesFunction = (songSpec?: any) => Entities
// tslint:disable-next-line:no-any
type BuildScalesFunction = (songSpec?: any) => Scales

interface CompileSongParameters {
    songMaterial: SongMaterial,
    songSpec: SongSpec,
}

interface CompileThreadParameters {
    entity: Entity,
    scales: Scales
}

interface CompileThreadsParameters {
    entities: Entities,
    scales: Scales
}

interface NoteSpec {
    durationSpec?: NotePropertySpec,
    gainSpec?: NotePropertySpec,
    pitchSpec?: NotePropertySpec,
    sustainSpec?: NotePropertySpec,
}

interface Adjustable {
    offset?: Offset,
    scalar?: Scalar,
}

interface NotePropertySpec extends Adjustable {
    index?: Index,
    scaleIndex?: Index,
}

type NoteSpecs = NoteSpec[]

type NoteProperty = Time | Scalar | Frequency

interface CompileNotePropertyOptions {
    scales: Scales
}

interface CompileNotesOptions {
    scales: Scales,
}

type EntityDictionary = DictionaryOf<Entity>

type NoteSpecsDictionary = DictionaryOf<NoteSpecs>

export {
    Entity,
    Entities,
    TimeType,
    CompileSongParameters,
    CompileThreadParameters,
    CompileThreadsParameters,
    BuildEntitiesFunction,
    BuildScalesFunction,
    VoiceSpec,
    NoteSpec,
    NotePropertySpec,
    NoteSpecs,
    NoteProperty,
    CompileNotePropertyOptions,
    CompileNotesOptions,
    EntityDictionary,
    NoteSpecsDictionary,
    Adjustable,
}
