import { prepareSampleVoice, PrepareSampleVoiceParameters, Voice } from '@musical-patterns/performer'

const compileSampleVoice: (compileSampleVoiceParameters: PrepareSampleVoiceParameters) => Voice =
    prepareSampleVoice

export {
    compileSampleVoice,
}
