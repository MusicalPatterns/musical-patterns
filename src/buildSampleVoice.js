import context from './context'
import samples from './samples'

const OCTAVE = 2
const CENTS_PER_OCTAVE = 1200
const BASE_SAMPLE_PITCH = 6
const BASE_SAMPLE_GAIN = 0.25

const TROMBONE_SAMPLE_CENTS_ADJUSTMENT = 200
const CELLO_SAMPLE_CENTS_ADJUSTMENT = 0
const TUBA_SAMPLE_CENTS_ADJUSTMENT = 1200
const TRUMPET_SAMPLE_CENTS_ADJUSTMENT = -100
const DOUBLEBASS_SAMPLE_CENTS_ADJUSTMENT = 2400
const PIANO_SAMPLE_CENTS_ADJUSTMENT = -2400

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
        if (type === 'trombone') sampleAdjustPitch = TROMBONE_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'cello') sampleAdjustPitch = CELLO_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'tuba') sampleAdjustPitch = TUBA_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'trumpet') sampleAdjustPitch = TRUMPET_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'doublebass') sampleAdjustPitch = DOUBLEBASS_SAMPLE_CENTS_ADJUSTMENT
        if (type === 'piano') sampleAdjustPitch = PIANO_SAMPLE_CENTS_ADJUSTMENT

        source.detune.value = sampleAdjustPitch + CENTS_PER_OCTAVE * Math.log(BASE_SAMPLE_PITCH / pitch) / Math.log(OCTAVE)

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
