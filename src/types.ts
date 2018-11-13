import { Adjustable, Part, TimeType } from './compile'
import { Coordinate, Frequency, Index, Scalar, Time } from './nominal'
import { StartNote, StopNote } from './performance'

interface Note {
    duration: Time,
    frequency: Frequency,
    gain: Scalar,
    position: Coordinate,
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

enum SpatializationType {
    MONO = 'mono',
    IMMERSIVE = 'immersive',
}

interface Scale extends Adjustable {
    scalars: Scalar[],
}

type Segment = Part[]

type ContourElement = [ number, number ]

export {
    Voice,
    Note,
    Thread,
    VoiceType,
    Scale,
    Segment,
    ContourElement,
    SpatializationType,
}
