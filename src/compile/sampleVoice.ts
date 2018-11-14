import { prepareSampleVoice, PrepareSampleVoiceParameters, Voice } from '@musical-patterns/performer'

// tslint:disable-next-line:no-type-definitions-outside-types-modules
const compileSampleVoice: (compileSampleVoiceParameters: PrepareSampleVoiceParameters) => Voice =
    prepareSampleVoice

export {
    compileSampleVoice,
}
