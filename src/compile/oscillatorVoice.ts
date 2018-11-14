import { prepareOscillatorVoice, PrepareOscillatorVoiceParameters, Voice } from '@musical-patterns/performer'

// tslint:disable-next-line:no-type-definitions-outside-types-modules
const compileOscillatorVoice: (compileOscillatorVoiceParameters: PrepareOscillatorVoiceParameters) => Voice =
    prepareOscillatorVoice

export {
    compileOscillatorVoice,
}
