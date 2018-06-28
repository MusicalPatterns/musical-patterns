import context from './context'

const buildVoice = () => {
    const oscillatorNode = context.createOscillator()
    const gainNode = context.createGain()
    gainNode.connect(context.destination)
    gainNode.gain.value = 0

    oscillatorNode.connect(gainNode)
    oscillatorNode.type = 'square'
    oscillatorNode.start()

    return {
        oscillatorNode,
        gainNode,
    }
}

export default [
    buildVoice(),
    buildVoice(),
    buildVoice(),
    buildVoice(),
    buildVoice(),
    buildVoice(),
    buildVoice(),
    buildVoice(),
    buildVoice(),
]
