import { Note, OscillatorName, Timbre, VoiceType } from '../types'
import { Scalar } from '../utilities/nominalTypes'

interface VoiceConfig {
    timbre: Timbre | OscillatorName,
    voiceType: VoiceType,
}

interface EntityConfig {
    nextOffset?: number,
    nextOnset?: number,
    noteIndex?: number,
    notes: Note[],
    pitches: Scalar[],
    voiceConfig: VoiceConfig,
    voiceGain?: Scalar,
}

export {
    EntityConfig,
}
