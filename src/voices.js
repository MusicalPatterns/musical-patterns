import context from './context'

const buildVoice = type => {
    const oscillatorNode = context.createOscillator()
    const gainNode = context.createGain()
    gainNode.connect(context.destination)
    gainNode.gain.value = 0

    oscillatorNode.connect(gainNode)
    oscillatorNode.type = type
    oscillatorNode.start()

    return {
        oscillatorNode,
        gainNode,
    }
}

export default [
    buildVoice('square'),
    buildVoice('square'),
    buildVoice('square'),
    buildVoice('square'),
    buildVoice('square'),
    buildVoice('sine'),
    buildVoice('sawtooth'),
    buildVoice('triangle'),
    buildVoice('sawtooth'),
]
