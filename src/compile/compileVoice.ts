import { OscillatorName, SampleName, Voice, VoiceType } from '../types'
import compileOscillatorVoice from './compileOscillatorVoice'
import compileSampleVoice from './compileSampleVoice'
import { VoiceSpec } from './types'

const compileVoice: (voiceSpec: VoiceSpec) => Voice =
    (voiceSpec: VoiceSpec): Voice => {
        const { voiceType, timbre } = voiceSpec

        return voiceType === VoiceType.SAMPLE ?
            compileSampleVoice({ timbre: timbre as SampleName }) :
            compileOscillatorVoice({ timbre: timbre as OscillatorName })
    }

export {
    compileVoice,
}
