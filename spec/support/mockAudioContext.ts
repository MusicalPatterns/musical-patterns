const mockOscillator = {
    connect: () => {
    },
    start: () => {
    },
}

const mockGain = {
    connect: () => {
    },
    gain: {},
}

const mockAudioContext = {
    createOscillator: () => mockOscillator,
    createGain: () => mockGain,
}

export default mockAudioContext
