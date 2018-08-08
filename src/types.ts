import { EntityConfig } from './compile/types'
import { Frequency, Scalar } from './utilities/nominalTypes'

interface Note {
    duration: number,
    gain: Scalar,
    pitchIndex: number,
    sustain: number,
}

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
    nextOffset: number,
    nextOnset: number,
    noteIndex: number,
    notes: Note[],
    pitches: Scalar[],
    voice: Voice,
    voiceGain: Scalar,
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

interface Song {
    baseFrequency: Frequency,
    entityConfigs: EntityConfig[]
}

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

export {
    Voice,
    Note,
    NoteToPlay,
    StartNote,
    StopNote,
    Entity,
    Song,
    Timbre,
    VoiceType,
    OscillatorName,
}
