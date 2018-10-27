import { Adjustable, TimeType } from './compile'
import { Frequency, Index, Scalar, Time } from './nominal'
import { StartNote, StopNote } from './perform'

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

enum OscillatorName {
    SQUARE = 'square',
    SINE = 'sine',
    SAWTOOTH = 'sawtooth',
    TRIANGLE = 'triangle',
    CUSTOM = 'custom',
}

interface Scale extends Adjustable {
    scalars: Scalar[],
}

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
    Thread,
    SampleName,
    VoiceType,
    OscillatorName,
    Scale,
}
