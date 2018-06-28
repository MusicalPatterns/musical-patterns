const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

const buildVoice = () => {
    const oscillatorNode = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    gainNode.connect(audioCtx.destination);
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
