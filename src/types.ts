import { Adjustable, Part, TimeType } from './compile'
import { Frequency, Index, Scalar, Time } from './nominal'
import { StartNote, StopNote } from './performance'

interface Note {
    duration: Time,
    frequency: Frequency,
    gain: Scalar,
    sustain: Time,
}

interface Voice {
    startNote: StartNote,
    stopNote: StopNote,
}

interface Thread {
    nextEnd: Time,
    nextStart: Time,
    noteIndex: Index,
    notes: Note[],
    timeType: TimeType,
    voice: Voice,
}

enum VoiceType {
    OSCILLATOR = 'oscillator',
    SAMPLE = 'sample',
}

interface Scale extends Adjustable {
    scalars: Scalar[],
}

type Segment = Part[]

export {
    Voice,
    Note,
    Thread,
    VoiceType,
    Scale,
    Segment,
}
