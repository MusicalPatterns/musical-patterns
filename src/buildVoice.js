import context from './context'
import {BASE_OSCILLATOR_GAIN, BASE_OSCILLATOR_PITCH} from './constants'
import pitches from './pitches'

const buildVoice = type => {
    const oscillatorNode = context.createOscillator()

    const gainNode = context.createGain()
    gainNode.connect(context.destination)
    gainNode.gain.value = 0

    oscillatorNode.connect(gainNode)
    oscillatorNode.type = type
    oscillatorNode.start()

    const startNote = ({pitch, gain}) => {
        oscillatorNode.frequency.value = pitches[pitch - 1] * BASE_OSCILLATOR_PITCH
        gainNode.gain.value = gain * BASE_OSCILLATOR_GAIN
    }

    const stopNote = () => gainNode.gain.value = 0

    return {
        startNote,
        stopNote,
    }
}

export default buildVoice
