import { Note, OscillatorName, Timbre, VoiceType } from '../types'
import { Scalar, Time } from '../utilities/nominalTypes'

interface VoiceConfig {
    timbre: Timbre | OscillatorName,
    voiceType: VoiceType,
}

interface EntityConfig {
    nextOffset?: Time,
    nextOnset?: Time,
    noteIndex?: number,
    notes: Note[],
    pitches: Scalar[],
    voiceConfig: VoiceConfig,
    voiceGain?: Scalar,
}

export {
    EntityConfig,
}
