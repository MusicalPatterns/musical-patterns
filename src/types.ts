import { Adjustable, TimeType } from './compile'
import { Frequency, Index, Scalar, Time } from './nominal'
import { StartNote, StopNote } from './perform'

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

interface Scale extends Adjustable {
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
