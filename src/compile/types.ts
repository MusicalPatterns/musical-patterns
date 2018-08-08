import { Note, OscillatorName, Timbre, VoiceType } from '../types'
import { Index, Scalar, Time } from '../utilities/nominalTypes'

interface VoiceConfig {
    timbre: Timbre | OscillatorName,
    voiceType: VoiceType,
}

interface EntityConfig {
    nextOffset?: Time,
    nextOnset?: Time,
    noteIndex?: Index,
    notes: Note[],
    pitches: Scalar[],
    voiceConfig: VoiceConfig,
    voiceGain?: Scalar,
}

export {
    EntityConfig,
}
