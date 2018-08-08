import { Note, OscillatorName, Timbre, VoiceType } from '../types'

interface VoiceConfig {
    timbre: Timbre | OscillatorName,
    voiceType: VoiceType,
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

export {
    EntityConfig,
}
