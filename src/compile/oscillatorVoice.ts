import { prepareOscillatorVoice, PrepareOscillatorVoiceParameters, Voice } from '@musical-patterns/performer'

const compileOscillatorVoice: (compileOscillatorVoiceParameters: PrepareOscillatorVoiceParameters) => Voice =
    prepareOscillatorVoice

export {
    compileOscillatorVoice,
}
