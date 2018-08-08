interface Note {
    duration: number,
    gain: number,
    pitchIndex: number,
    sustain: number,
}

interface NoteToPlay {
    gain: number,
    pitch: number,
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
    pitches: number[],
    voice: Voice,
    voiceGain: number,
}

interface VoiceConfig {
    timbre: string,
    voiceType: string,
}

interface EntityConfig {
    nextOffset?: number,
    nextOnset?: number,
    noteIndex?: number,
    notes: Note[],
    pitches: number[],
    voiceConfig: VoiceConfig,
    voiceGain?: number,
}

interface Song {
    basePitch: number,
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
    EntityConfig,
    Timbre,
}
