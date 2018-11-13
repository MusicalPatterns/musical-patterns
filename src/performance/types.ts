import { Cents, Coordinate, Frequency, Scalar } from '../nominal'

interface NoteToPlay {
    frequency: Frequency,
    gain: Scalar,
    position: Coordinate
}

type StartNote = (note: NoteToPlay) => void

type StopNote = () => void

type ModulePath = string

interface SampleData {
    centsAdjustment?: Cents,
}

type SampleDatas = { [x in SampleName]: SampleData }

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

enum OscillatorName {
    SQUARE = 'square',
    SINE = 'sine',
    SAWTOOTH = 'sawtooth',
    TRIANGLE = 'triangle',
    CUSTOM = 'custom',
}

export {
    ModulePath,
    NoteToPlay,
    StartNote,
    StopNote,
    SampleData,
    SampleDatas,
    SampleName,
    OscillatorName,
}
