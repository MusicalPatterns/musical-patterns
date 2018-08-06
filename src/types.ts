interface Note {
    duration: number,
    gain: number,
    pitch: number,
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

type Song = EntityConfig[]

export {
    Voice,
    Note,
    NoteToPlay,
    StartNote,
    StopNote,
    Entity,
    Song,
    EntityConfig,
}
