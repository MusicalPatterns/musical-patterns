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

global.window.AudioContext = () => mockAudioContext
