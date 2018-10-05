import { Notes, OscillatorName, Timbre, VoiceType } from '../types'
import { Index, Scalar, Time } from '../utilities/nominalTypes'

interface VoiceConfig {
    timbre: Timbre | OscillatorName,
    voiceType: VoiceType,
}

enum TimeType {
    RAW = 'raw',
    ATOMIC = 'atomic',
}

interface EntityConfig {
    nextEnd?: Time,
    nextStart?: Time,
    noteIndex?: Index,
    notes?: Notes,
    timeType?: TimeType,
    voiceConfig?: VoiceConfig,
    voiceGain?: Scalar,
}

export {
    EntityConfig,
    TimeType,
}
