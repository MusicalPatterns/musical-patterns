import { OscillatorName, SampleName, SpatializationType, Voice, VoiceType } from '@musical-patterns/performer'
import { compileOscillatorVoice } from './oscillatorVoice'
import { compileSampleVoice } from './sampleVoice'
import { VoiceSpec } from './types'

const compileVoice: (voiceSpec: VoiceSpec) => Voice =
    (voiceSpec: VoiceSpec): Voice => {
        const { voiceType, timbre, spatialization = SpatializationType.MONO } = voiceSpec

        return voiceType === VoiceType.SAMPLE ?
            compileSampleVoice({ timbre: timbre as SampleName, spatialization }) :
            compileOscillatorVoice({ timbre: timbre as OscillatorName, spatialization })
    }

export {
    compileVoice,
}
