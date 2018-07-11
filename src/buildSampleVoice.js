import context from './context'
import samples from './samples'

const OCTAVE = 2
const CENTS_PER_OCTAVE = 1200
const BASE_SAMPLE_PITCH = 8
const BASE_SAMPLE_GAIN = 0.25

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

        source.detune.value = CENTS_PER_OCTAVE * Math.log(BASE_SAMPLE_PITCH / pitch) / Math.log(OCTAVE)

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
