import { TimeType } from './compile/types'
import { StartNote, StopNote } from './perform/types'
import { Frequency, Index, Offset, Scalar, Time } from './utilities/nominalTypes'

interface Note {
    duration: Time,
    frequency: Frequency,
    gain: Scalar,
    sustain: Time,
}

type Notes = Note[]

interface Voice {
    startNote: StartNote,
    stopNote: StopNote,
}

interface Thread {
    nextEnd: Time,
    nextStart: Time,
    noteIndex: Index,
    notes: Notes,
    timeType: TimeType,
    voice: Voice,
}

type Threads = Thread[]

enum VoiceType {
    OSCILLATOR = 'oscillator',
    SAMPLE = 'sample',
}

enum OscillatorName {
    SQUARE = 'square',
    SINE = 'sine',
    SAWTOOTH = 'sawtooth',
    TRIANGLE = 'triangle',
    CUSTOM = 'custom',
}

type Scalars = Scalar[]

interface Scale {
    offset?: Offset,
    scalar?: Scalar,
    scalars: Scalars,
}

type Scales = Scale[]

enum SampleName {
    CELLO = 'cello',
    DOUBLEBASS = 'doublebass',
    FLUTE = 'flute',
    PIANO = 'piano',
    TROMBONE = 'trombone',
    TRUMPET = 'trumpet',
    TUBA = 'tuba',
    VIOLIN = 'violin',
    SNARE = 'snare',
    KICK = 'kick',
    HIHAT = 'hihat',
}

export {
    Voice,
    Note,
    Notes,
    Thread,
    SampleName,
    VoiceType,
    OscillatorName,
    Scale,
    Scales,
    Threads,
    Scalars,
}
