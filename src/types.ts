import { TimeType } from './compile/types'
import { Index, Scalar, Time } from './utilities/nominalTypes'

interface Note {
    duration: Time,
    gain: Scalar,
    pitchIndex: Index,
    pitchScalar: Scalar,
    scaleIndex: Index,
    sustain: Time,
}

type Notes = Note[]

interface NoteToPlay {
    gain: Scalar,
    pitch: Scalar,
}

type StartNote = (note: NoteToPlay) => void

type StopNote = () => void

interface Voice {
    startNote: StartNote,
    stopNote: StopNote,
}

interface Entity {
    nextEnd: Time,
    nextStart: Time,
    noteIndex: Index,
    notes: Notes,
    scales: Scales,
    timeType: TimeType,
    voice: Voice,
    voiceGain: Scalar,
}

type Entities = Entity[]

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

type Scale = Scalar[]
type Scales = Scale[]

enum Timbre {
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

interface Times {
    atomicTime: Time,
    rawTime: Time,
}

export {
    Voice,
    Note,
    NoteToPlay,
    StartNote,
    StopNote,
    Entity,
    Timbre,
    VoiceType,
    OscillatorName,
    Scale,
    Scales,
    Notes,
    Times,
    Entities,
}
