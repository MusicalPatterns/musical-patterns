import { Notes, OscillatorName, Timbre, VoiceType } from '../types'
import { Index, Scalar, Time } from '../utilities/nominalTypes'

interface VoiceSpec {
    timbre: Timbre | OscillatorName,
    voiceType: VoiceType,
}

enum TimeType {
    RAW = 'raw',
    ATOMIC = 'atomic',
}

interface EntitySpec {
    nextEnd?: Time,
    nextStart?: Time,
    noteIndex?: Index,
    notes?: Notes,
    timeType?: TimeType,
    voiceGain?: Scalar,
    voiceSpec?: VoiceSpec,
}

type EntitySpecs = EntitySpec[]

export {
    EntitySpec,
    EntitySpecs,
    TimeType,
}
