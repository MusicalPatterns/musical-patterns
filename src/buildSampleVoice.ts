import context from './context'
import samples from './samples'

const OCTAVE = 2
const CENTS_PER_OCTAVE = 1200
const BASE_SAMPLE_GAIN = 0.25

const SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE = 3600

const CELLO_SAMPLE_CENTS_ADJUSTMENT = 0 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const DOUBLEBASS_SAMPLE_CENTS_ADJUSTMENT = 2400 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const FLUTE_SAMPLE_CENTS_ADJUSTMENT = 0 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const PIANO_SAMPLE_CENTS_ADJUSTMENT = -2400 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const TROMBONE_SAMPLE_CENTS_ADJUSTMENT = 200 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const TRUMPET_SAMPLE_CENTS_ADJUSTMENT = -100 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const TUBA_SAMPLE_CENTS_ADJUSTMENT = 1200 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const VIOLIN_SAMPLE_CENTS_ADJUSTMENT = 0 + SHIFT_FROM_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE

const buildSampleVoice = type => {
    let source

    const gainNode = context.createGain()
    gainNode.connect(context.destination)
    gainNode.gain.value = 0

    const startNote = ({pitch, gain}) => {
        source = context.createBufferSource()
        source.buffer = samples[type]

        const gainNode = context.createGain()
        gainNode.connect(context.destination)
        source.connect(gainNode)
        gainNode.gain.value = gain * BASE_SAMPLE_GAIN

        let sampleAdjustPitch = 0
        if (type === 'cello') sampleAdjustPitch = CELLO_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'doublebass') sampleAdjustPitch = DOUBLEBASS_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'flute') sampleAdjustPitch = FLUTE_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'piano') sampleAdjustPitch = PIANO_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'trombone') sampleAdjustPitch = TROMBONE_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'trumpet') sampleAdjustPitch = TRUMPET_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'tuba') sampleAdjustPitch = TUBA_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'violin') sampleAdjustPitch = VIOLIN_SAMPLE_CENTS_ADJUSTMENT

        source.detune.value = sampleAdjustPitch + CENTS_PER_OCTAVE * Math.log(pitch) / Math.log(OCTAVE)

        source.start(0)
    }

    const stopNote = () => {
        source.stop()
    }

    return {
        startNote,
        stopNote,
    }
}

export default buildSampleVoice
